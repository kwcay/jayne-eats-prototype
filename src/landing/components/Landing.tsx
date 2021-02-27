import styled from 'styled-components';

import {
  ColouredLink,
  Image,
  LightLink,
  PageWrapper,
  potOfFoodSrc,
  routes,
} from '../../shared';

const ButtonsWrapper = styled.div`
  margin: 1rem;

  a {
    margin: 1rem;
  }
`;

export default function Landing() {
  return (
    <PageWrapper>
      <h1>Jayne Eats</h1>

      <p>
        Jayne is an artificially-intelligent bot that knows what you like to
        eat.
      </p>

      <Image width="100px" height="100px" src={potOfFoodSrc} />

      <ButtonsWrapper>
        <ColouredLink to={routes.ask()}>try it out</ColouredLink>
        <LightLink to={routes.story()}>learn more</LightLink>
      </ButtonsWrapper>
    </PageWrapper>
  );
}
