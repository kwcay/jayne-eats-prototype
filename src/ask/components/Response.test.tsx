import { render } from '@testing-library/react';

import Response from './Response';
import { InferenceResult } from '../../model';
import { GlobalContextProvider } from '../../shared';

// TODO: mock Google API.
describe.skip('Response', () => {
  it('should render without crashing', () => {
    const inference = InferenceResult.Positive;
    const name = 'Jayne';
    const history: string[] = [];

    render(
      <GlobalContextProvider>
        <Response inference={inference} name={name} queryHistory={history} />
      </GlobalContextProvider>,
    );
  });
});
