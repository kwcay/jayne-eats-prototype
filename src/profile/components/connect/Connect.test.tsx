import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Connect from './Connect';
import { GlobalContextProvider } from '../../../shared';

// TODO: mock Google API.
describe.skip('Connect', () => {
  it('should render without crashing', () => {
    render(
      <GlobalContextProvider>
        <MemoryRouter>
          <Connect />
        </MemoryRouter>
      </GlobalContextProvider>,
    );
  });
});
