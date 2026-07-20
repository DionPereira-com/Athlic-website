import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import PrivacybeleidPage from './pages/Privacybeleid';
import CookiebeleidPage from './pages/Cookiebeleid';
import ContactPage from './pages/Contact';
import AanpakPage from './pages/Aanpak';
import OverOnsPage from './pages/OverOns';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacybeleid" element={<PrivacybeleidPage />} />
        <Route path="/cookiebeleid" element={<CookiebeleidPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aanpak" element={<AanpakPage />} />
        <Route path="/over-ons" element={<OverOnsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
