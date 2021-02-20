import styled from 'styled-components';

const Input = styled.input`
  border: none;
  border-bottom: 1px dotted ${(props) => props.theme.textColor.string()};
  font-family: ${(props) => props.theme.bodyFontFamily};
  font-size: ${(props) => props.theme.bodyFontSize};
  margin: 0.4rem 1rem;
  padding: 0.4rem 1rem;
  text-align: center;
`;

export default Input;
