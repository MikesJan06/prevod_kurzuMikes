import { StrictMode } from 'react'; // Opravený import
import { createRoot } from 'react-dom/client';  // Opravený import
import './index.css';
import App from './app.jsx';  // Ujisti se, že název souboru je správný

// Vytvoření kořenu pro React aplikaci
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
