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
`;

export default function Footer() {
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
          <Link to={routes.privacy()}>Privacy</Link>
        </li>
      </ul>
    </Wrapper>
  );
}
