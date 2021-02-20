import { render } from '@testing-library/react';

import Response from './Response';

describe('Response', () => {
  it('should render without crashing', () => {
    render(<Response />);
  });
});
