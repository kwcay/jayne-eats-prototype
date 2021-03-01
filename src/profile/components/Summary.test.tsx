import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Summary from './Summary';
import { GlobalContextProvider } from '../../shared';

// TODO: mock Google API.
describe.skip('Summary', () => {
  it('should render without crashing', () => {
    render(
      <GlobalContextProvider>
        <MemoryRouter>
          <Summary />
        </MemoryRouter>
      </GlobalContextProvider>,
    );
  });
});
