import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor.string()};
    color: ${(props) => props.theme.textColor.string()};
    font-family: ${(props) => props.theme.bodyFontFamily};
    font-size: 28px;
    text-align: center;
  }

  a {
    border-bottom: 1px solid ${(props) => props.theme.textColor.string()};
    color: ${(props) => props.theme.textColor.string()};
    text-decoration: none;
    transition: border-bottom-width 300ms;

    &:hover {
      border-bottom-width: 3px;
    }
  }

  em {
    font-style: normal;
    font-variant: small-caps;
  }

  h1, h2, h3 {
    font-family: ${(props) => props.theme.headingFontFamily};
  }
`;

export default GlobalStyle;
