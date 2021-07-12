import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// import devices from '../styles/devices';

// Actions
import { changePassword } from '../actions/userActions';

// Components
import AccountLayout from '../layouts/AccountLayout';
import Input from '../components/Elements/Input/Input';
import Button from '../components/Elements/Button/Button';

// Styled Components
const Wrapper = styled.div`
  padding: 2rem;
  margin-bottom: 2rem;
  background: #fff;
  border: 0.1rem solid ${({ theme }) => theme.gray};

  :last-child {
    margin-bottom: 0;
  }

  h1 {
    margin-bottom: 2rem;
  }
`;

const Row = styled.div`
  display: flex;
  margin: 0 -1rem;
`;

const Col = styled.div`
  flex: 1;
  padding: 0 1rem;
`;

const StyledLabel = styled.label`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  ${Input} {
    margin-top: 1rem;
  }
`;

const StyledForm = styled.form``;

const UserSettingsView = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [matchedPasswords, setMatchedPasswords] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'password': {
        setPassword(value);
        break;
      }
      case 'repeatedPassword': {
        setRepeatedPassword(value);
        break;
      }
      default: {
        break;
      }
    }
  };

  const checkPasswordsMatch = () => {
    if (password === repeatedPassword && password.length !== 0 && repeatedPassword.length !== 0) {
      setMatchedPasswords(true);
      return;
    }

    setMatchedPasswords(false);
  };

  const handleChangePwButton = (e) => {
    e.preventDefault();
    dispatch(changePassword(password));
  };

  useEffect(() => {
    checkPasswordsMatch();
    console.log(matchedPasswords);
  }, [password, repeatedPassword]);

  return (
    <AccountLayout>
      <Wrapper>
        <h1>Twoje Dane</h1>
        <StyledForm>
          <Row>
            <Col>
              <StyledLabel htmlFor='firstName'>
                Imię
                <Input id='firstName' value={user.data.firstName} disabled />
              </StyledLabel>
            </Col>
            <Col>
              <StyledLabel htmlFor='lastName'>
                Nazwisko
                <Input id='lastName' value={user.data.lastName} disabled />
              </StyledLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <StyledLabel htmlFor='pesel'>
                PESEL
                <Input id='pesel' value={user.data.pesel} disabled />
              </StyledLabel>
            </Col>
            <Col>
              <StyledLabel htmlFor='idCard'>
                Numer dowodu osobistego
                <Input id='idCard' value={user.data.pesel} disabled />
              </StyledLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <StyledLabel htmlFor='street'>
                Ulica
                <Input id='street' value={user.data.address.street} disabled />
              </StyledLabel>
            </Col>
            <Col>
              <StyledLabel htmlFor='city'>
                Miasto
                <Input id='city' value={user.data.address.city} disabled />
              </StyledLabel>
            </Col>
            <Col>
              <StyledLabel htmlFor='postalCode'>
                Kod pocztowy
                <Input id='postalCode' value={user.data.address.postalCode} disabled />
              </StyledLabel>
            </Col>
          </Row>
        </StyledForm>
      </Wrapper>
      <Wrapper>
        <h1>Zmień hasło</h1>
        <Row>
          <Col>
            <StyledLabel>
              Hasło
              <Input name='password' value={password} onChange={handleInput} />
            </StyledLabel>
          </Col>
          <Col>
            <StyledLabel>
              Powtórz hasło
              <Input name='repeatedPassword' value={repeatedPassword} onChange={handleInput} />
            </StyledLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button isDisabled={matchedPasswords} onClick={handleChangePwButton}>
              Zmień hasło
            </Button>
          </Col>
        </Row>
      </Wrapper>
    </AccountLayout>
  );
};

export default UserSettingsView;
