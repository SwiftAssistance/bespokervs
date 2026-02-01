import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

const Services = lazy(() => import('./pages/Services'));
const Kitchens = lazy(() => import('./pages/Kitchens'));
const Wardrobes = lazy(() => import('./pages/Wardrobes'));
const HomeOffice = lazy(() => import('./pages/HomeOffice'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div className="min-h-screen bg-primary-dark" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/kitchens" element={<Kitchens />} />
          <Route path="/wardrobes" element={<Wardrobes />} />
          <Route path="/home-office" element={<HomeOffice />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
