import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

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

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div className="min-h-screen bg-primary-dark" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/living-room" element={<LivingRoom />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/home-office" element={<FittedHomeOffice />} />
          <Route path="/loft-conversion" element={<LoftConversion />} />
          <Route path="/cloakroom" element={<Cloakroom />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/areas/:areaSlug" element={<AreaPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
