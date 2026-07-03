/**
 * Build-time prerendering.
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle).
 * Renders every route to static HTML in dist/<route>/index.html so search
 * engines and AI crawlers that don't execute JavaScript (GPTBot,
 * PerplexityBot, ClaudeBot, …) see the full page content. Vercel serves
 * these files directly because filesystem matches take precedence over the
 * SPA rewrite in vercel.json; client-side React hydrates on load.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';

import { areas } from '../src/config/areas.js';
import { render } from '../dist-ssr/entry-server.js';

const routes = [
  '/',
  '/living-room',
  '/bedroom',
  '/home-office',
  '/loft-conversion',
  '/cloakroom',
  '/services',
  '/portfolio',
  '/about',
  '/contact',
  '/areas',
  ...areas.map((area) => `/areas/${area.slug}`),
];

const template = readFileSync('dist/index.html', 'utf8');

// Head tags in the static template that react-helmet re-emits per page.
// Strip them from the template so prerendered pages don't carry duplicates;
// global tags (geo, robots, JSON-LD business schema, favicon…) are kept.
const stripPatterns = [
  /^\s*<title>.*?<\/title>\n/ms,
  /^\s*<meta name="(?:title|description|keywords)" content=".*?"\s*\/>\n/gm,
  /^\s*<link rel="canonical" href=".*?"\s*\/>\n/gm,
  /^\s*<meta property="og:[^"]*" content=".*?"\s*\/>\n/gm,
  /^\s*<meta name="twitter:[^"]*" content=".*?"\s*\/>\n/gm,
];

const rootOpen = '<div id="root"';

const stripHead = (html) => {
  for (const pattern of stripPatterns) {
    html = html.replace(pattern, '');
  }
  return html;
};

const injectApp = (html, appHtml) => {
  // Replace everything inside #root (the FCP shell) with the rendered app.
  const start = html.indexOf(rootOpen);
  if (start === -1) throw new Error('#root not found in template');
  const afterOpen = html.indexOf('>', start) + 1;
  // #root is the last element in <body>; find its closing tag by scanning
  // for the final </div> before </body>.
  const bodyClose = html.indexOf('</body>', afterOpen);
  const rootClose = html.lastIndexOf('</div>', bodyClose);
  return (
    html.slice(0, start) +
    `<div id="root" data-ssr="true">` +
    appHtml +
    html.slice(rootClose)
  );
};

for (const route of routes) {
  const helmetContext = {};
  const appHtml = await render(route, helmetContext);
  const { helmet } = helmetContext;

  const headTags = [helmet.title, helmet.meta, helmet.link, helmet.script]
    .map((tag) => tag.toString())
    .filter(Boolean)
    .join('\n    ');

  let html = stripHead(template);
  html = html.replace('</head>', `    ${headTags}\n  </head>`);
  html = injectApp(html, appHtml);

  const outFile =
    route === '/' ? 'dist/index.html' : path.join('dist', route, 'index.html');
  mkdirSync(path.dirname(outFile), { recursive: true });
  writeFileSync(outFile, html);
  console.log(`prerendered ${route} -> ${outFile} (${(html.length / 1024).toFixed(0)} kB)`);
}
