import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Actions
import { userRegister } from '../../actions/userActions';

// Components
import Button from '../Elements/Button/Button';
import Input from '../Elements/Input/Input';
import devices from '../../styles/devices';

const StyledForm = styled.form`
  width: 100%;
  max-width: 50rem;
  padding: 2rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.05);

  a {
    color: ${({ theme }) => theme.primary};
  }

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

  & > label {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    input {
      margin-left: 0.5rem;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media screen and ${devices.lg} {
    flex-direction: row;
    margin: 0 -0.5rem;
    margin-bottom: 1rem;
  }
`;

const Col = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;

  @media screen and ${devices.lg} {
    margin: 0 0.5rem;
  }

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-weight: 600;
    ${Input} {
      margin-top: 1rem;
    }
  }
`;

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [pesel, setPesel] = useState();
  const [id, setId] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [accepted, setAccepted] = useState(false);

  const checkLength = (value, length) => value.slice(0, length);

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
      case 'repeatedPassword': {
        setRepeatedPassword(value);
        break;
      }
      case 'firstName': {
        setFirstName(value);
        break;
      }
      case 'lastName': {
        setLastName(value);
        break;
      }
      case 'pesel': {
        setPesel(checkLength(value, 11));
        break;
      }
      case 'id': {
        setId(checkLength(value, 9));
        break;
      }
      case 'street': {
        setStreet(value);
        break;
      }
      case 'city': {
        setCity(value);
        break;
      }
      case 'postalCode': {
        setPostalCode(value);
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleCheckbox = () => setAccepted(!accepted);

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(userRegister(email, password, firstName, lastName, pesel, id, street, city, postalCode));
  };

  return (
    <StyledForm onSubmit={handleForm}>
      <h1>Rejestracja</h1>
      <Row>
        <Col>
          <label>
            Email
            <Input id='email' name='email' type='text' placeholder='email' value={email} onChange={handleInput} />
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label>
            Hasło
            <Input id='password' name='password' type='password' placeholder='password' value={password} onChange={handleInput} />
          </label>
        </Col>
        <Col>
          <label>
            Powtórz hasło
            <Input
              id='repeatedPassword'
              name='repeatedPassword'
              type='password'
              placeholder='repeatedPassword'
              value={repeatedPassword}
              onChange={handleInput}
            />
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label htmlFor='firstName'>
            Imię
            <Input id='firstName' name='firstName' type='text' placeholder='imię' value={firstName} onChange={handleInput} />
          </label>
        </Col>
        <Col>
          <label htmlFor='lastName'>
            Nazwisko
            <Input id='lastName' name='lastName' type='text' placeholder='imię' value={lastName} onChange={handleInput} />
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label htmlFor='pesel'>
            PESEL
            <Input id='pesel' name='pesel' type='number' placeholder='imię' value={pesel} pattern='\d*' maxlength='2' onChange={handleInput} />
          </label>
        </Col>
        <Col>
          <label htmlFor='id'>
            Numer dowodu
            <Input id='id' name='id' type='text' placeholder='imię' value={id} onChange={handleInput} />
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label htmlFor='street'>
            Ulica
            <Input id='street' name='street' type='text' placeholder='imię' value={street} onChange={handleInput} />
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label htmlFor='city'>
            Miasto
            <Input id='city' name='city' type='text' placeholder='imię' value={city} onChange={handleInput} />
          </label>
        </Col>
        <Col>
          <label htmlFor='postalCode'>
            Kod pocztowy
            <Input id='postalCode' name='postalCode' type='text' placeholder='imię' value={postalCode} onChange={handleInput} />
          </label>
        </Col>
      </Row>
      <label>
        <Link to='/o-nas/regulamin'>Akceptuje regulamin serwisu</Link>
        <input type='checkbox' onChange={handleCheckbox} />
      </label>
      <Button type='submit' disabled={!accepted}>
        Zarejestruj
      </Button>
      <span>
        Masz już konto? <Link to='/zaloguj'>Zaloguj się</Link>
      </span>
    </StyledForm>
  );
};

export default RegisterForm;
