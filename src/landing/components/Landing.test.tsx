import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Landing from './Landing';
import { GlobalContextProvider } from '../../shared';

describe('Landing', () => {
  it('should render without crashing', () => {
    render(
      <MemoryRouter>
        <GlobalContextProvider>
          <Landing />
        </GlobalContextProvider>
      </MemoryRouter>,
    );
  });
});
