import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import Button from '../Elements/Button/Button';
import Input from '../Elements/Input/Input';

const StyledForm = styled.form`
  width: 100%;
  max-width: 50rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.05);
  //border: 0.1rem solid ${({ theme }) => theme.primary};

  h1 {
    text-align: center;
  }

  span {
    align-self: flex-end;
  }

  & > * {
    margin-bottom: 1.5rem;
    :last-child {
      margin-bottom: 0;
    }
  }
`;

const LoginForm = () => (
  <StyledForm>
    <h1>Zaloguj</h1>
    <Input type='text' placeholder='adres email' />
    <Input type='password' placeholder='hasło' />
    <Button>Zaloguj</Button>
    <span>
      Nie masz konta? <Link to='/rejestracja'>Zarejestruj się</Link>
    </span>
  </StyledForm>
);

export default LoginForm;
