import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyle';
import theme from '../theme';

/**
 * Provides app-wide context such as the theme and the Redux store.
 */
interface Props {
  children: React.ReactNode;
}

export default function GlobalContextProvider({ children }: Props) {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </React.StrictMode>
  );
}
