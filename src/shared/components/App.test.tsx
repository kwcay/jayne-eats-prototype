import { render } from '@testing-library/react';

import App from './App';
import GlobalContextProvider from './GlobalContextProvider';

describe('App', () => {
  it('should render without crashing', () => {
    render(
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>,
    );
  });
});
