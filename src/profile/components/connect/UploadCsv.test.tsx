import { render } from '@testing-library/react';

import UploadCsv from './UploadCsv';

describe('UploadCsv', () => {
  it('should render without crashing', () => {
    render(<UploadCsv />);
  });
});
