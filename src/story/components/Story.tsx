import Color from 'color';
import styled from 'styled-components';

import {
  Anchor,
  dizzyFaceSrc,
  gameDieSrc,
  nutellaSrc,
  wearyFaceSrc,
  routes,
  ColouredButtonLink,
  Image,
  InlineIcon,
  PageWrapper,
} from '../../shared';

const Highlight = styled.span`
  font-weight: ${(props) => props.theme.bodyFontWeightBold};
`;

const Banana = styled(Highlight)`
  color: ${(props) => props.theme.yellow.darken(0.2).string()};
`;

const Chocolate = styled(Highlight)`
  background-color: ${Color('#623313').fade(0.9).string()};
  color: #623313;
`;

const Milkshake = styled(Highlight)`
  color: #eacac8;
  text-shadow: 1px 1px 1px ${Color('#eacac8').darken(0.5).string()};
`;

const Strawberry = styled(Highlight)`
  color: red;
`;

const Strike = styled(Highlight)`
  font-weight: ${(props) => props.theme.bodyFontWeight};
  text-decoration: line-through;
`;

const Vanilla = styled(Highlight)`
  color: #f3e5ab;
  text-shadow: 0 0 3px #623313;
`;

export default function About() {
  return (
    <PageWrapper>
      <h1>The Story</h1>

      <p>
        Figuring out what <Anchor href="https://kwcay.co/jayne">Jayne</Anchor>{' '}
        likes to eat is <em>hard</em>. She doesn&apos;t like{' '}
        <Strike>things with fruit in them</Strike>, but she&apos;ll take you up
        on that fruity drink anytime. If the drink is a{' '}
        <Milkshake>milkshake</Milkshake>, however, no dice{' '}
        <InlineIcon src={gameDieSrc} /> that is, unless the milkshake was made
        with <Strawberry>strawberries</Strawberry> or <Banana>banana</Banana>,
        in which case she <em>can&apos;t get enough</em>!
      </p>

      <Image height="100px" width="100px" src={dizzyFaceSrc} />

      <p>
        Oh, and did you know she doesn&apos;t like <Strike>chocolate</Strike>?
        Not even{' '}
        <Image
          height="18px"
          width="68px"
          src={nutellaSrc}
          verticalAlign="baseline"
        />
        ! She does enjoy a good <Chocolate>chocolate cake</Chocolate>, provided
        it&apos;s drowned in <Vanilla>vanilla</Vanilla>. But forget about
        anything with &ldquo;chocolate flavouring&rdquo;...{' '}
        <InlineIcon src={wearyFaceSrc} />
      </p>

      <p>
        In her opinion, her preferences follow a perfectly sensible pattern.{' '}
        <em>Jayne Eats</em> is an artificially intelligent bot built precisely
        to test that theory.
      </p>

      <ColouredButtonLink to={routes.ask()}>try it out</ColouredButtonLink>
    </PageWrapper>
  );
}
