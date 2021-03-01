import { render } from '@testing-library/react';

import App from './App';
import GlobalContextProvider from './GlobalContextProvider';

// TODO: mock Google API.
describe.skip('App', () => {
  it('should render without crashing', () => {
    render(
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>,
    );
  });
});
