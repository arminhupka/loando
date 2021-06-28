import React from 'react';
import styled from 'styled-components';

// Components
import { Container } from '../styles/GlobalStyle';
import MainLayout from '../layouts/MainLayout';
import RegisterForm from '../components/RegisterForm/RegisterForm';

// Styled Components
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

const RegisterView = () => (
  <MainLayout center>
    <StyledContainer>
      <RegisterForm />
    </StyledContainer>
  </MainLayout>
);

export default RegisterView;
