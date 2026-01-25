import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Kitchens from './pages/Kitchens';
import Wardrobes from './pages/Wardrobes';
import HomeOffice from './pages/HomeOffice';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default App;
