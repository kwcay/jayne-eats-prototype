import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Selector from './Selector';
import { GlobalContextProvider } from '../../../shared';

// TODO: mock Google API.
describe.skip('Selector', () => {
  it('should render without crashing', () => {
    render(
      <GlobalContextProvider>
        <MemoryRouter>
          <Selector onSelectCsv={() => {}} />
        </MemoryRouter>
      </GlobalContextProvider>,
    );
  });
});
