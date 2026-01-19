import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // استيراد BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* BrowserRouter مع basename عشان GitHub Pages */}
    <BrowserRouter basename="/my-portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// إذا عايز تقيس أداء الموقع
reportWebVitals();
