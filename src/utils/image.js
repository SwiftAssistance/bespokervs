/**
 * Image utilities.
 *
 * Local images are served as build-generated WebP variants (see
 * scripts/generate-images.mjs, run automatically by the `prebuild` hook).
 * External URLs keep the previous CDN query-parameter behaviour.
 *
 * Note `imgUrl` deliberately still returns the ORIGINAL JPEG/PNG path: it
 * feeds the `src` attribute, which is the fallback for anything that cannot
 * use `srcSet` or WebP. Only `imgSrcSet` points at the generated variants,
 * so a browser without WebP support still renders the original.
 */

import manifest from './image-manifest.json';

const isExternal = (url) => url.startsWith('http');

/** Local images we generate variants for. */
const isLocalPhoto = (url) => url.startsWith('/images/') && /\.(jpe?g|png)$/i.test(url);

const imageKey = (url) => url.replace(/^\/images\//, '').replace(/\.(jpe?g|png)$/i, '');

/**
 * Return an image URL for the `src` attribute.
 * Local paths pass through unchanged (they are the safe fallback).
 */
export const imgUrl = (url, w, q = 75) => {
  if (!isExternal(url)) return url;
  const base = url.split('?')[0];
  return `${base}?auto=format&fit=crop&q=${q}&w=${w}`;
};

/**
 * Generate a srcSet string for responsive images.
 * Local paths resolve to the generated WebP variants; external URLs use CDN
 * parameters. Returns undefined when there is nothing useful to emit, so the
 * attribute is simply omitted.
 */
export const imgSrcSet = (url, widths, q = 75) => {
  if (isExternal(url)) {
    const base = url.split('?')[0];
    return widths.map((w) => `${base}?auto=format&fit=crop&q=${q}&w=${w} ${w}w`).join(', ');
  }

  if (!isLocalPhoto(url) || !widths?.length) return undefined;

  const key = imageKey(url);
  const available = manifest[key];
  if (!available?.length) return undefined;

  // Only emit widths that were actually generated. Sources smaller than a
  // requested width are deliberately not upscaled, so asking for e.g. 1200
  // from a 945px original must not produce a srcSet entry that 404s.
  const usable = widths.filter((w) => available.includes(w));
  if (!usable.length) return undefined;

  return usable.map((w) => `/images/generated/${key}-${w}.webp ${w}w`).join(', ');
};
