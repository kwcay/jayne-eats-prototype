import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyle';
import theme from '../theme';
import GapiAuthContextProvider from '../../gapi/components/Provider';

interface Props {
  children: React.ReactNode;
}

/**
 * Provides app-wide context such as the theme and the Redux store.
 */
export default function GlobalContextProvider({ children }: Props) {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GapiAuthContextProvider>
          <GlobalStyle />
          {children}
        </GapiAuthContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
