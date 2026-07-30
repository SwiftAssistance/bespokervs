import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';

// Pre-seed vite-react-ssg's static loader data so it NEVER fetches
// /static-loader-data-manifest-<hash>.json at runtime.
//
// Why: on every client-side navigation, vite-react-ssg's internal route
// loader reads this global; if it's unset it fetches that manifest and
// calls .json() on the response *without checking res.ok*. Any failure
// to retrieve that file — a missing build hash, a stale cached page
// pointing at a manifest a newer deploy replaced, a CDN serving an HTML
// 404 — therefore crashes the entire app with
// "Unexpected token '<', <!DOCTYPE ... is not valid JSON", taking down
// every route rather than degrading.
//
// None of our routes define a react-router `loader`, so that manifest is
// entirely null values ({"/bedroom":{"0":null},...}) and carries no real
// data. Seeding an empty object short-circuits the fetch and yields the
// identical result (undefined ?? null === null) with no network call and
// no way to fail.
//
// If a route ever does gain a real `loader`, remove this and make sure
// the manifest fetch is genuinely reachable and error-handled first.
if (typeof window !== 'undefined') {
  window.__VITE_REACT_SSG_STATIC_LOADER_DATA__ ||= {};
}

// Self-hosted fonts (latin only) — eliminates render-blocking Google Fonts request.
// Only the weights actually used are loaded. Inter 600 (font-semibold) and
// Playfair 700 had zero usages in the codebase — every font-serif use is
// "font-serif italic font-light". Dropping them is visually identical: under
// CSS font matching, font-medium (500) already resolves to 400 whether or not
// 600 is present, and font-light (300) italic serif resolves to Playfair 400.
import '@fontsource/inter/latin-300.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-700.css';
import '@fontsource/playfair-display/latin-400.css';
import '@fontsource/playfair-display/latin-400-italic.css';

import './index.css';

export const createRoot = ViteReactSSG({ routes });
