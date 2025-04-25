import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';               // seus estilos base
import './App.css';                 // estilos globais do App
import './assets/css/reset.css';    // reset de CSS
import './assets/css/blog.css';     // estilos do Blog

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
