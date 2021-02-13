import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import About from './About';

describe('About', () => {
  it('should render without crashing', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );
  });
});
