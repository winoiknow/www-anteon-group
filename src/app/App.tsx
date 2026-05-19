import { BrowserRouter, Routes, Route } from 'react-router';
import Landing from './components/Landing';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import OptOutPolicy from './components/OptOutPolicy';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/opt-out" element={<OptOutPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}