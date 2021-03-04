import styled from 'styled-components';

interface ImageProps {
  height: string;
  src: string;
  verticalAlign?: string;
  width: string;
}

const Image = styled.span<ImageProps>`
  background: transparent center center no-repeat url(${(props) => props.src});
  background-size: contain;
  display: inline-block;
  height: ${(props) => props.height || '100%'};
  max-width: ${(props) => props.width || '100%'};
  vertical-align: ${(props) => props.verticalAlign || 'middle'};
  width: 100%;
`;

export function InlineIcon({ src }: { src: string }) {
  return <Image height="28px" width="28px" src={src} />;
}

export default Image;
