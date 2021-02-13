import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Privacy from './Privacy';

describe('Privacy', () => {
  it('should render without crashing', () => {
    render(
      <MemoryRouter>
        <Privacy />
      </MemoryRouter>,
    );
  });
});
