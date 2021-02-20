import styled from 'styled-components';

import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

const Wrapper = styled.main`
  margin: auto;
  max-width: 800px;
`;

export default function PageWrapper({ children }: Props) {
  return (
    <Wrapper>
      <main>{children}</main>
      <Footer />
    </Wrapper>
  );
}
