import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';

import theme from '../styles/theme';

// Components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

// Styled Components
const Content = styled.div`
  flex: 1 auto;

  ${({ center }) =>
    center &&
    css`
      display: flex;
      align-items: center;
    `}
`;

const MainLayout = ({ children, center }) => (
  <ThemeProvider theme={theme}>
    <Header />
    <Content center={center}>{children}</Content>
    <Footer />
  </ThemeProvider>
);

MainLayout.defaultProps = {
  center: false,
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
};

export default MainLayout;
