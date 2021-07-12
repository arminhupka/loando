import React from 'react';
import styled from 'styled-components';

// Components
import { Container } from '../../styles/GlobalStyle';
import devices from '../../styles/devices';

// Styled Components
const Copyright = styled.div`
  background: ${({ theme }) => theme.primaryDark};

  ${Container} {
    font-weight: 500;
  }
`;

const Widget = styled.div``;

const FooterContent = styled.div`
  padding: 5rem 0;

  ${Container} {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media screen and ${devices.lg} {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
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
      <Container>
        <Widget>
          <h1>Loando</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam placeat repudiandae similique voluptates voluptatum?</p>
        </Widget>
        <Widget>
          <h1>Widget</h1>
        </Widget>
        <Widget>
          <h1>Widget</h1>
        </Widget>
      </Container>
    </FooterContent>
    <Copyright>
      <Container>
        <p>created with love by hupka.dev {new Date().getFullYear()}</p>
      </Container>
    </Copyright>
  </StyledFooter>
);

export default Footer;
