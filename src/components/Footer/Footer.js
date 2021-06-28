import React from 'react';
import styled from 'styled-components';

// Components
import { Container } from '../../styles/GlobalStyle';

// Styled Components
const Copyright = styled.div`
  background: ${({ theme }) => theme.primaryDark};

  ${Container} {
    font-weight: 500;
  }
`;

const FooterContent = styled.div`
  padding: 5rem 0;
`;

const StyledFooter = styled.footer`
  color: #fff;
  background: ${({ theme }) => theme.primary};

  ${Copyright} {
    padding: 1.5rem 0;
  }
`;

const Footer = () => (
  <StyledFooter>
    <FooterContent>
      <Container>Footer</Container>
    </FooterContent>
    <Copyright>
      <Container>
        <p>created with love by hupka.dev {new Date().getFullYear()}</p>
      </Container>
    </Copyright>
  </StyledFooter>
);

export default Footer;
