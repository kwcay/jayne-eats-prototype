import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Story from './Story';
import { GlobalContextProvider } from '../../shared';

describe('Story', () => {
  it('should render without crashing', () => {
    render(
      <MemoryRouter>
        <GlobalContextProvider>
          <Story />
        </GlobalContextProvider>
      </MemoryRouter>,
    );
  });
});
