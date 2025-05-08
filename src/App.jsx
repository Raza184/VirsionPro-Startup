import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ProductsComingSoon from './pages/ProductsComingSoon';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductsComingSoon />} />
      </Routes>
    </Router>
  );
}