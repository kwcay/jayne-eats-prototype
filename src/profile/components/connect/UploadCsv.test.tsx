import { render } from '@testing-library/react';

import UploadCsv from './UploadCsv';
import { GlobalContextProvider } from '../../../shared';

// TODO: mock Google API.
describe.skip('UploadCsv', () => {
  it('should render without crashing', () => {
    render(
      <GlobalContextProvider>
        <UploadCsv onCancel={() => {}} />
      </GlobalContextProvider>,
    );
  });
});
