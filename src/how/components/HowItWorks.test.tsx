import { render } from '@testing-library/react';
import React from 'react';

import HowItWorks from './HowItWorks';

describe('HowItWorks', () => {
  it('should render without crashing', () => {
    render(<HowItWorks />);
  });
});
