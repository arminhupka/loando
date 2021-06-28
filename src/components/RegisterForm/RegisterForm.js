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

const Row = styled.div`
  display: flex;
  margin: 0 -1rem;
  margin-bottom: 1rem;
`;

const Col = styled.div`
  width: 100%;
  padding: 0 1rem;
  & > * {
    width: 100%;
  }
`;

const RegisterForm = () => (
  <StyledForm>
    <h1>Rejestracja</h1>
    <Row>
      <Col>
        <Input type='text' placeholder='imię' />
      </Col>
      <Col>
        <Input type='password' placeholder='nazwisko' />
      </Col>
    </Row>
    <Button>Zarejestruj</Button>
    <span>
      Masz już konto? <Link to='/zaloguj'>Zaloguj się</Link>
    </span>
  </StyledForm>
);

export default RegisterForm;
