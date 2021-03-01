import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Summary from './Summary';

describe('Summary', () => {
  it('should render without crashing', () => {
    render(
      <MemoryRouter>
        <Summary />
      </MemoryRouter>,
    );
  });
});
