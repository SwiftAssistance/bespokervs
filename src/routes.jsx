import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import { areas } from './config/areas';

const NotFound = lazy(() => import('./pages/NotFound'));
const Areas = lazy(() => import('./pages/Areas'));
const AreaPage = lazy(() => import('./pages/AreaPage'));
const LivingRoom = lazy(() => import('./pages/LivingRoom'));
const Bedroom = lazy(() => import('./pages/Bedroom'));
const FittedHomeOffice = lazy(() => import('./pages/FittedHomeOffice'));
const LoftConversion = lazy(() => import('./pages/LoftConversion'));
const Cloakroom = lazy(() => import('./pages/Cloakroom'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const Kitchen = lazy(() => import('./pages/Kitchen'));
const Bathroom = lazy(() => import('./pages/Bathroom'));

// react-router's data router does not wrap lazy() route elements in
// Suspense automatically, so each lazy element needs its own boundary.
const withSuspense = (element) => (
  <Suspense fallback={<div className="min-h-screen bg-primary-dark" />}>{element}</Suspense>
);

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'living-room', element: withSuspense(<LivingRoom />) },
      { path: 'kitchens', element: withSuspense(<Kitchen />) },
      { path: 'fitted-bathrooms', element: withSuspense(<Bathroom />) },
      { path: 'bedroom', element: withSuspense(<Bedroom />) },
      { path: 'home-office', element: withSuspense(<FittedHomeOffice />) },
      { path: 'loft-conversion', element: withSuspense(<LoftConversion />) },
      { path: 'cloakroom', element: withSuspense(<Cloakroom />) },
      { path: 'services', element: withSuspense(<Services />) },
      { path: 'about', element: withSuspense(<About />) },
      { path: 'contact', element: withSuspense(<Contact />) },
      { path: 'privacy', element: withSuspense(<Privacy />) },
      { path: 'terms', element: withSuspense(<Terms />) },
      { path: 'sitemap', element: withSuspense(<Sitemap />) },
      { path: 'areas', element: withSuspense(<Areas />) },
      {
        path: 'areas/:areaSlug',
        element: withSuspense(<AreaPage />),
        // Every area slug must be listed here or it will not be prerendered.
        getStaticPaths: () => areas.map((a) => `/areas/${a.slug}`),
      },
      // A literal '404' path (as opposed to the '*' wildcard below) is a
      // static route, so it gets prerendered to dist/404.html — the file
      // both Netlify and Vercel serve automatically for any unmatched URL.
      { path: '404', element: withSuspense(<NotFound />) },
      { path: '*', element: withSuspense(<NotFound />) },
    ],
  },
];

export default routes;
