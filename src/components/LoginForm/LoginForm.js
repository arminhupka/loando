import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

// Components
import Button from '../Elements/Button/Button';
import Input from '../Elements/Input/Input';
import devices from '../../styles/devices';

const StyledForm = styled.form`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.05);

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

  @media screen and ${devices.lg} {
    max-width: 50rem;
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email': {
        setEmail(value);
        break;
      }
      case 'password': {
        setPassword(value);
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
      setError('email is not email');
      setTimeout(() => {
        setError('');
      }, 3000);
    }

    setIsAuth(true);
  };

  if (isAuth) {
    return <Redirect to='/' />;
  }

  return (
    <StyledForm onSubmit={handleForm}>
      <h1>Zaloguj</h1>
      <p>{error}</p>
      <Input type='text' placeholder='adres email' name='email' value={email} onChange={handleInput} />
      <Input type='password' placeholder='hasło' name='password' value={password} onChange={handleInput} />
      <Button>Zaloguj</Button>
      <span>
        Nie masz konta? <Link to='/rejestracja'>Zarejestruj się</Link>
      </span>
    </StyledForm>
  );
};

export default LoginForm;
