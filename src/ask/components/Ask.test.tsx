import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Ask from './Ask';

describe('Ask', () => {
  it('should render without crashing', () => {
    render(
      <MemoryRouter>
        <Ask />
      </MemoryRouter>,
    );
  });
});
