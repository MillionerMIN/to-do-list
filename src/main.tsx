import './app/styles/global.css';

import { AppWithRedux as App } from './app';
import { AppHttpRequests } from './shared';
import { StrictMode } from 'react';
import { StyledEngineProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      {/* <App /> */}
      <AppHttpRequests />
    </StyledEngineProvider>
  </StrictMode>
);
