import { render } from '@testing-library/react';
import React from 'react';

import Landing from './Landing';

describe('Landing', () => {
  it('should render without crashing', () => {
    render(<Landing />);
  });
});
