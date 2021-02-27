import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import HowItWorks from './HowItWorks';

describe('HowItWorks', () => {
  it('should render without crashing', () => {
    render(
      <MemoryRouter>
        <HowItWorks />
      </MemoryRouter>,
    );
  });
});
