import { render } from '@testing-library/react';

import Connect from './Connect';

describe('Connect', () => {
  it('should render without crashing', () => {
    render(<Connect />);
  });
});
