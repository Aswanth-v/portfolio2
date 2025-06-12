import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // ✅ Use HashRouter instead of BrowserRouter
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter> {/* ✅ Works perfectly on GitHub Pages */}
      <App />
    </HashRouter>
  </StrictMode>
);
