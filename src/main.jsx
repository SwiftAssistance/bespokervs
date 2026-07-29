import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';

// Self-hosted fonts (latin only) — eliminates render-blocking Google Fonts request
import '@fontsource/inter/latin-300.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/inter/latin-700.css';
import '@fontsource/playfair-display/latin-400.css';
import '@fontsource/playfair-display/latin-400-italic.css';
import '@fontsource/playfair-display/latin-700.css';

import './index.css';

export const createRoot = ViteReactSSG({ routes });
