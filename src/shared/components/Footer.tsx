import styled from 'styled-components';

import Link, { Anchor } from './Link';
import * as routes from '../routes';

const Wrapper = styled.footer`
  margin: 3rem auto;

  ul {
    display: inline-flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 1rem auto;
    padding: 0;

    li {
      margin: auto 0.5rem;
    }
  }

  p,
  p > a {
    font-size: 1rem;
  }
`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <ul>
        <li>
          <Link to={routes.story()}>Story</Link>
        </li>
        <li>
          <Link to={routes.howItWorks()}>How It Works</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={routes.profile('')}>Profile</Link>
        </li>
        <li>
          <Link to={routes.ask()}>Ask</Link>
        </li>
        <li>
          <Link to={routes.privacy()}>Privacy</Link>
        </li>
      </ul>
      <p>
        &copy; {year} <Anchor href="https://kwcay.co">Kwahu &amp; Cayes</Anchor>
      </p>
    </Wrapper>
  );
}
