import React from 'react';
import styled from 'styled-components';

// Components
import { Container } from '../styles/GlobalStyle';
import MainLayout from '../layouts/MainLayout';
import LoginForm from '../components/LoginForm/LoginForm';

// Styled Components
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

const LoginView = () => (
  <MainLayout center>
    <StyledContainer>
      <LoginForm />
    </StyledContainer>
  </MainLayout>
);

export default LoginView;
