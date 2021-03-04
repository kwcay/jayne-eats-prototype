import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor.string()};
    color: ${(props) => props.theme.textColor.string()};
    font-family: ${(props) => props.theme.bodyFontFamily};
    font-size: ${(props) => props.theme.bodyFontSize};
    font-variant: common-ligatures tabular-nums;
    font-weight: ${(props) => props.theme.bodyFontWeight};
    line-height: ${(props) => props.theme.bodyLineHeight};
    margin: 0;
    min-height: 100vh;
    text-align: center;
  }

  #jayne-eats-root {
    min-height: 100vh;
  }

  em {
    font-style: italic;
    text-transform: uppercase;
  }

  h1, h2, h3 {
    font-family: ${(props) => props.theme.headingFontFamily};
  }
`;

export default GlobalStyle;
