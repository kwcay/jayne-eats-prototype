import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Landing from './Landing';
import { GlobalContextProvider } from '../../shared';

// TODO: mock Google API.
describe.skip('Landing', () => {
  it('should render without crashing', () => {
    render(
      <GlobalContextProvider>
        <MemoryRouter>
          <Landing />
        </MemoryRouter>
      </GlobalContextProvider>,
    );
  });
});
