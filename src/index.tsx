import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './containers';
import reportWebVitals from './reportWebVitals';

import './styles/index.scss';

export const site = 'The Hub';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
