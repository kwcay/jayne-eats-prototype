import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Ask from './Ask';
import { GlobalContextProvider } from '../../shared';

// TODO: mock Google API.
describe.skip('Ask', () => {
  it('should render without crashing', () => {
    render(
      <MemoryRouter>
        <GlobalContextProvider>
          <Ask />
        </GlobalContextProvider>
      </MemoryRouter>,
    );
  });
});
