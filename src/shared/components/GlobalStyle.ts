import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor.string()};
    color: #222;
    font-family: 'Indie Flower', cursive;
    text-align: center;
  }
`;

export default GlobalStyle;
