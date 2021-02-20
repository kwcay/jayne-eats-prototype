import { render } from '@testing-library/react';

import Reaction from './Reaction';

describe('Reaction', () => {
  it('should render without crashing', () => {
    render(<Reaction />);
  });
});
