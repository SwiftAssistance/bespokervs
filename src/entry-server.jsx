import { StrictMode } from 'react';
import { Writable } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

/**
 * Build-time prerender entry (see scripts/prerender.mjs).
 * Uses renderToPipeableStream with onAllReady so lazy-loaded routes are
 * fully resolved before the HTML is captured — renderToString would emit
 * the Suspense fallback instead of page content.
 */
export function render(url, helmetContext) {
  return new Promise((resolve, reject) => {
    let html = '';
    const writable = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk;
        callback();
      },
      final(callback) {
        resolve(html);
        callback();
      },
    });

    const { pipe } = renderToPipeableStream(
      <StrictMode>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </HelmetProvider>
      </StrictMode>,
      {
        onAllReady() {
          pipe(writable);
        },
        onError(error) {
          reject(error);
        },
      }
    );
  });
}
