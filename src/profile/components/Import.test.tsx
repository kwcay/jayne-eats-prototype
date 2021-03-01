import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ImportProfile from './Import';
import { GlobalContextProvider } from '../../shared';

// TODO: mock Google API.
describe.skip('ImportProfile', () => {
  it('should render without crashing', () => {
    render(
      <GlobalContextProvider>
        <MemoryRouter>
          <ImportProfile />
        </MemoryRouter>
      </GlobalContextProvider>,
    );
  });
});
