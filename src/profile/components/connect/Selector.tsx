import styled from 'styled-components';

import { handleGoogleLogIn } from '../../../gapi';
import { NarrowColouredButton, NarrowLightLink, routes } from '../../../shared';

interface Props {
  onSelectCsv: () => void;
}

const Wrapper = styled.div`
  button {
    margin: auto 1rem;
  }
`;

export default function Selector({ onSelectCsv }: Props) {
  return (
    <Wrapper>
      <NarrowColouredButton onClick={handleGoogleLogIn}>
        Google Sheet
      </NarrowColouredButton>
      <NarrowColouredButton onClick={onSelectCsv}>
        Upload CSV
      </NarrowColouredButton>
      <NarrowLightLink to={routes.profile()}>Cancel</NarrowLightLink>
    </Wrapper>
  );
}
