import styled from 'styled-components';

import {
  ColouredButtonLink,
  LightButtonLink,
  Link,
  PageWrapper,
  routes,
} from '../../shared';

const Intro = styled.p`
  margin: 2rem auto;
  max-width: 400px;
`;

export default function Landing() {
  return (
    <PageWrapper randomizeBackground>
      <h1>Jayne Eats</h1>

      <Intro>
        Jayne is an <Link to={routes.ask()}>artificially-intelligent</Link> bot
        that knows what you like to eat.
      </Intro>

      <div>
        <ColouredButtonLink to={routes.ask()}>try it out</ColouredButtonLink>
        <LightButtonLink to={routes.story()}>learn more</LightButtonLink>
      </div>
    </PageWrapper>
  );
}
