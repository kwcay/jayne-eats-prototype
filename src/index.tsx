import '@csstools/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import reportWebVitals from './reporting/webVitals';
import App from './shared/components/App';
import GlobalStyle from './shared/components/GlobalStyle';
import theme from './shared/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('jayne-eats-root')
);

reportWebVitals(console.log);
