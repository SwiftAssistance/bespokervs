/**
 * Image optimization utilities for Unsplash CDN images.
 * Generates responsive srcSet and optimized URLs.
 */

/**
 * Generate an optimized Unsplash image URL with specified width and quality.
 */
export const imgUrl = (url, w, q = 75) => {
  const base = url.split('?')[0];
  return `${base}?auto=format&fit=crop&q=${q}&w=${w}`;
};

/**
 * Generate a srcSet string for responsive images.
 */
export const imgSrcSet = (url, widths, q = 75) => {
  const base = url.split('?')[0];
  return widths
    .map((w) => `${base}?auto=format&fit=crop&q=${q}&w=${w} ${w}w`)
    .join(', ');
};
