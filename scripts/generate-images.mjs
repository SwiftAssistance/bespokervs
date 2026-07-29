/**
 * Build-time responsive image generation.
 *
 * Every photo in public/images is a full-resolution JPEG (~15 MB total, no
 * WebP), and the site's imgSrcSet() helper returned undefined for local
 * paths — so every `srcSet` in the codebase was dead and mobile visitors
 * downloaded desktop-sized originals. This generates WebP variants that
 * imgSrcSet() then points at.
 *
 * Output goes to public/images/generated/<name>-<width>.webp and is
 * gitignored: it is derived data, regenerated on every build (including on
 * Netlify, via the prebuild hook), so it never bloats the repository.
 *
 * Variants are only produced at widths smaller than the source — we never
 * upscale, which would add bytes without adding detail.
 */
import sharp from 'sharp';
import { readdir, mkdir, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const SRC_DIR = 'public/images';
const OUT_DIR = 'public/images/generated';
// Union of every width the call sites actually request via imgSrcSet().
// Keep in sync if a component asks for a width not listed here.
const WIDTHS = [400, 600, 800, 900, 1200, 1920];
const QUALITY = 72;
// Records which widths genuinely exist per image, so imgSrcSet() never
// points at a variant that was skipped as an upscale.
const MANIFEST = 'src/utils/image-manifest.json';

const run = async () => {
  await mkdir(OUT_DIR, { recursive: true });

  const files = (await readdir(SRC_DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f));

  // NOTE: accumulate per-file results and reduce at the end. Writing
  // `total += await stat(...)` inside concurrent callbacks reads `total`
  // before awaiting, so every callback starts from the same stale value and
  // the last write wins — which silently under-reports by ~100x.
  const results = await Promise.all(
    files.map(async (file) => {
      const srcPath = path.join(SRC_DIR, file);
      const srcSize = (await stat(srcPath)).size;

      const base = file.replace(/\.(jpe?g|png)$/i, '');
      const meta = await sharp(srcPath).metadata();

      let generated = 0;
      let skipped = 0;
      let outSize = 0;
      const available = [];

      for (const w of WIDTHS) {
        // Never upscale — a 945px-wide source gains nothing from a 1920 variant.
        if (meta.width && w > meta.width) continue;

        const outPath = path.join(OUT_DIR, `${base}-${w}.webp`);

        // Incremental: skip if already generated and newer than the source.
        if (existsSync(outPath)) {
          const o = await stat(outPath);
          if (o.mtimeMs >= (await stat(srcPath)).mtimeMs) {
            outSize += o.size;
            skipped++;
            available.push(w);
            continue;
          }
        }

        await sharp(srcPath).resize({ width: w }).webp({ quality: QUALITY }).toFile(outPath);
        outSize += (await stat(outPath)).size;
        generated++;
        available.push(w);
      }

      return { srcSize, outSize, generated, skipped, base, available };
    })
  );

  // Manifest is committed so `npm run dev` and any build that skips the
  // prebuild hook still resolve correct widths.
  const manifest = Object.fromEntries(
    results
      .filter((r) => r.available.length)
      .map((r) => [r.base, r.available.sort((a, b) => a - b)])
  );
  await writeFile(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);

  const sum = (k) => results.reduce((a, r) => a + r[k], 0);
  const srcBytes = sum('srcSize');
  const outBytes = sum('outSize');
  const mb = (b) => (b / 1024 / 1024).toFixed(1);

  console.log(
    `[images] ${files.length} sources (${mb(srcBytes)} MB) -> ` +
      `${sum('generated')} generated, ${sum('skipped')} cached, ` +
      `${mb(outBytes)} MB of WebP variants ` +
      `(largest variant set is ${((outBytes / srcBytes) * 100).toFixed(0)}% of source bytes)`
  );
};

run().catch((err) => {
  // Fail the build loudly: silently shipping without variants would leave
  // every srcSet pointing at files that do not exist.
  console.error('[images] generation failed:', err);
  process.exit(1);
});
