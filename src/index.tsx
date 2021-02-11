import '@csstools/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './shared/components/App';
import reportWebVitals from './reporting/webVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('jayne-eats-root')
);

reportWebVitals(console.log);
