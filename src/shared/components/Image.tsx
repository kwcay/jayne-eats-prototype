import styled from 'styled-components';

interface ImageProps {
  height: string;
  src: string;
  width: string;
}

const Image = styled.span<ImageProps>`
  background: transparent center center no-repeat url(${(props) => props.src});
  background-size: contain;
  display: inline-block;
  height: ${(props) => props.height || '100%'};
  max-width: ${(props) => props.width || '100%'};
  vertical-align: middle;
  width: 100%;
`;

export default Image;
