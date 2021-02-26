import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Story from './Story';

describe('Story', () => {
  it('should render without crashing', () => {
    render(
      <MemoryRouter>
        <Story />
      </MemoryRouter>,
    );
  });
});
