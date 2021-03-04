import { sample } from 'lodash';
import styled from 'styled-components';

import Footer from './Footer';
import Link, { Anchor } from './Link';
import * as backgrounds from '../assets/backgrounds';

interface Props {
  backgroundImage?: string;
}

interface ComponentProps {
  children: React.ReactNode;
  randomizeBackground?: boolean;
}

const OuterWrapper = styled.div<Props>`
  background: transparent center center no-repeat
    ${(props) => (props.backgroundImage ? `url(${props.backgroundImage})` : '')};
  background-size: cover;

  & > div {
    background-color: ${(props) =>
      props.backgroundImage
        ? props.theme.textColor.fade(0.2).string()
        : 'transparent'};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ${Anchor}, ${Link} {
    color: ${(props) =>
      props.backgroundImage
        ? props.theme.backgroundColor.string()
        : props.theme.textColor.string()};
  }

  ${Anchor}, ${Link} {
    &:active,
    &:hover {
      color: ${(props) =>
        props.backgroundImage
          ? props.theme.backgroundColor.darken(0.4).string()
          : props.theme.orange.string()};
    }
  }
`;

const OuterWrapperFilm = styled.div``;

const Wrapper = styled.main`
  margin: auto;
  max-width: 800px;
  min-height: calc(100vh - 2rem);
  padding: 1rem;
`;

export default function PageWrapper({
  children,
  backgroundImage,
  randomizeBackground,
}: ComponentProps & Props) {
  const bgImg =
    (randomizeBackground ? sample(backgrounds) : null) ?? backgroundImage;

  return (
    <OuterWrapper backgroundImage={bgImg}>
      <OuterWrapperFilm>
        <Wrapper>
          <main>{children}</main>
          <Footer />
        </Wrapper>
      </OuterWrapperFilm>
    </OuterWrapper>
  );
}

PageWrapper.defaultProps = {
  backgroundImage: null,
  randomizeBackground: false,
};
