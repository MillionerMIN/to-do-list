import './app/styles/global.css';

import App from './app/App.tsx';
import { StrictMode } from 'react';
import { StyledEngineProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </StrictMode>
);
