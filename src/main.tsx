import {createRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <Router>
      <App />
    </Router>
  </HelmetProvider>
);
