import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Profile from './Profile';
import { GlobalContextProvider } from '../../shared';

// TODO: mock Google API.
describe.skip('Profile', () => {
  it('should render without crashing', () => {
    render(
      <GlobalContextProvider>
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      </GlobalContextProvider>,
    );
  });
});
