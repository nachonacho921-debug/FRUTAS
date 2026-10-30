
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Listas from './listas.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Listas />
  </StrictMode>
);
