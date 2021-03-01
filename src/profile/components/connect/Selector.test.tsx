import { render } from '@testing-library/react';

import Selector from './Selector';

describe('Selector', () => {
  it('should render without crashing', () => {
    render(<Selector />);
  });
});
