import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Add this
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio2"> {/* ✅ basename is crucial for GitHub Pages */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
