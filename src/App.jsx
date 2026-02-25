import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

const LivingRoom = lazy(() => import('./pages/LivingRoom'));
const Bedroom = lazy(() => import('./pages/Bedroom'));
const FittedHomeOffice = lazy(() => import('./pages/FittedHomeOffice'));
const Bathroom = lazy(() => import('./pages/Bathroom'));
const Kitchen = lazy(() => import('./pages/Kitchen'));
const Cloakroom = lazy(() => import('./pages/Cloakroom'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div className="min-h-screen bg-primary-dark" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/living-room" element={<LivingRoom />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/home-office" element={<FittedHomeOffice />} />
          <Route path="/bathroom" element={<Bathroom />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/cloakroom" element={<Cloakroom />} />
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
