import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Ask from './Ask';
import { GlobalContextProvider } from '../../shared';

describe('Ask', () => {
  it('should render without crashing', () => {
    render(
      <GlobalContextProvider>
        <MemoryRouter>
          <Ask />
        </MemoryRouter>
      </GlobalContextProvider>,
    );
  });
});
