import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Action
import { userLogin } from '../../actions/userActions';

// Components
import Button from '../Elements/Button/Button';
import Input from '../Elements/Input/Input';
import NotificationBar from '../NotificationBar/NotificationBar';
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
  const dispatch = useDispatch();

  const alerts = useSelector((state) => state.alerts);
  const user = useSelector((state) => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleForm = async (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };

  if (user.user) {
    return <Redirect to='/konto' />;
  }

  return (
    <StyledForm onSubmit={handleForm}>
      <h1>Zaloguj</h1>
      {alerts.length !== 0 ? alerts.map((alert) => <NotificationBar msg={alert.msg} type={alert.type} />) : null}
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
