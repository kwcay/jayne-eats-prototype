import '@csstools/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './shared/components/App';
import GlobalContextProvider from './shared/components/GlobalContextProvider';
import { reportWebVitals } from './shared/reporting';

ReactDOM.render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>,
  document.getElementById('jayne-eats-root'),
);

// eslint-disable-next-line no-console
reportWebVitals(console.log);
