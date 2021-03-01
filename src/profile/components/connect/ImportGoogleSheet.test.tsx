import { render } from '@testing-library/react';

import ImportGoogleSheet from './ImportGoogleSheet';
import { GlobalContextProvider } from '../../../shared';

// TODO: mock Google API.
describe.skip('ImportGoogleSheet', () => {
  it('should render without crashing', () => {
    render(
      <GlobalContextProvider>
        <ImportGoogleSheet />
      </GlobalContextProvider>,
    );
  });
});
