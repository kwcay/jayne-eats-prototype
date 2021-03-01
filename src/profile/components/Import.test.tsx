import { render } from '@testing-library/react';

import ImportProfile from './Import';

describe('ImportProfile', () => {
  it('should render without crashing', () => {
    render(<ImportProfile />);
  });
});
