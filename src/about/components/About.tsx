import { dizzyFaceSrc, weaeryFaceSrc, Image, PageWrapper } from '../../shared';

export default function About() {
  return (
    <PageWrapper>
      <h1>About Jayne Eats</h1>
      <p>
        Figuring out what Jayne likes to eat is <em>hard</em>. She doesn&apos;t
        like things with fruit in them, but she&apos;ll take you up on that
        fruity drink anytime. If the drink is a milkshake, however, no dice.
        That is, unless the milkshake was made with strawberries or banana, in
        which case she <em>can&apos;t get enough</em>!
      </p>

      <Image height="100px" width="100px" src={dizzyFaceSrc} />

      <p>
        Oh, and did you know she doesn&apos;t like chocolate? Not even Nutella!
        She does enjoy a good chocolate cake, provided it&apos;s drowned in
        vanilla. But forget about anything with &ldquo;chocolate
        flavouring&rdquo;...{' '}
        <Image height="28px" width="28px" src={weaeryFaceSrc} />
      </p>

      <p>
        According to her, there&apos;s a perfectly sensible pattern in her
        preferences. In order to test that theory, we built <em>Jayne Eats</em>,
        an AI-powered bot.
      </p>
    </PageWrapper>
  );
}
