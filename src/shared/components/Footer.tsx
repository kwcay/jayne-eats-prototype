import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as routes from '../routes';

const Wrapper = styled.footer`
  ul {
    display: inline-flex;
    list-style-type: none;
    padding: 0;

    li {
      margin: auto 0.5rem;
    }
  }

  p {
    font-size: 1rem;
  }
`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <ul>
        <li>
          <Link to={routes.about()}>About</Link>
        </li>
        <li>
          <Link to={routes.ask()}>Ask</Link>
        </li>
        <li>
          <Link to={routes.profile()}>Profile</Link>
        </li>
        <li>
          <Link to={routes.privacy()}>Privacy</Link>
        </li>
      </ul>
      <p>
        &copy; {year} <a href="https://kwcay.co">Kwahu &amp; Cayes</a>
      </p>
    </Wrapper>
  );
}
