import styled from 'styled-components';

import { IMPORT_PROFILE } from '../constants';
import { NarrowColouredLink, PageWrapper, routes } from '../../shared';

const ProfileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ConfigLinks = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;

  a {
    margin: 0.4rem auto;
  }
`;

const SummaryWrapper = styled.div`
  flex-grow: 1;
`;

export default function Summary() {
  return (
    <PageWrapper>
      <h1>Profile</h1>

      <ProfileWrapper>
        <SummaryWrapper>To do: profile summary...</SummaryWrapper>
        <ConfigLinks>
          <NarrowColouredLink to={routes.profile(IMPORT_PROFILE)}>
            Import
          </NarrowColouredLink>
        </ConfigLinks>
      </ProfileWrapper>
    </PageWrapper>
  );
}
