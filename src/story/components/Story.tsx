import {
  dizzyFaceSrc,
  wearyFaceSrc,
  routes,
  ColouredLink,
  Image,
  PageWrapper,
} from '../../shared';

export default function About() {
  return (
    <PageWrapper>
      <h1>The Story</h1>

      <p>
        Figuring out what <a href="https://kwcay.co/jayne">Jayne</a> likes to
        eat is <em>hard</em>. She doesn&apos;t like things with fruit in them,
        but she&apos;ll take you up on that fruity drink anytime. If the drink
        is a milkshake, however, no dice. That is, unless the milkshake was made
        with strawberries or banana, in which case she{' '}
        <em>can&apos;t get enough</em>!
      </p>

      <Image height="100px" width="100px" src={dizzyFaceSrc} />

      <p>
        Oh, and did you know she doesn&apos;t like chocolate? Not even Nutella!
        She does enjoy a good chocolate cake, provided it&apos;s drowned in
        vanilla. But forget about anything with &ldquo;chocolate
        flavouring&rdquo;...{' '}
        <Image height="28px" width="28px" src={wearyFaceSrc} />
      </p>

      <p>
        In her opinion, her preferences follow a perfectly sensible pattern.{' '}
        <em>Jayne Eats</em> is an artificially intelligent bot built precisely
        to test that theory.
      </p>

      <ColouredLink to={routes.ask()}>try it out</ColouredLink>
    </PageWrapper>
  );
}
