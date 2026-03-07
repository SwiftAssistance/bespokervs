/**
 * Image utilities.
 * Returns local paths as-is. For external URLs, appends CDN parameters.
 */

const isExternal = (url) => url.startsWith('http');

/**
 * Return an image URL (passthrough for local paths).
 */
export const imgUrl = (url, w, q = 75) => {
  if (!isExternal(url)) return url;
  const base = url.split('?')[0];
  return `${base}?auto=format&fit=crop&q=${q}&w=${w}`;
};

/**
 * Generate a srcSet string for responsive images (undefined for local paths).
 */
export const imgSrcSet = (url, widths, q = 75) => {
  if (!isExternal(url)) return undefined;
  const base = url.split('?')[0];
  return widths
    .map((w) => `${base}?auto=format&fit=crop&q=${q}&w=${w} ${w}w`)
    .join(', ');
};
