import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Profile from './Profile';

describe('Profile', () => {
  it('should render without crashing', () => {
    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>,
    );
  });
});
