import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from '@components';

import * as translations from './locales';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider options={{ translations }}>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
);
