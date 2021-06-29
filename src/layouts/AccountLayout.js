import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import { Container } from '../styles/GlobalStyle';

// Components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import devices from '../styles/devices';

// Styled Components
const Content = styled.div`
  flex: 1 auto;

  @media screen and ${devices.lg} {
    display: flex;
  }

  ${Container} {
    display: flex;
  }
`;

const ChildrenContent = styled.main`
  @media screen and ${devices.lg} {
    padding: 2rem;
  }
`;

const AccountLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Header />
    <Content>
      <Container>
        <Sidebar />
        <ChildrenContent>{children}</ChildrenContent>
      </Container>
    </Content>
    <Footer />
  </ThemeProvider>
);

AccountLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AccountLayout;
