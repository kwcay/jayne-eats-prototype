import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Story from './Story';
import { GlobalContextProvider } from '../../shared';

// TODO: mock Google API.
describe.skip('Story', () => {
  it('should render without crashing', () => {
    render(
      <GlobalContextProvider>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </GlobalContextProvider>,
    );
  });
});
