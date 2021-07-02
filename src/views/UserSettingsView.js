import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import devices from '../styles/devices';

// Components
import AccountLayout from '../layouts/AccountLayout';
import Input from '../components/Elements/Input/Input';

// Styled Components
const Wrapper = styled.div`
  padding: 2rem;
  background: #fff;
  border: 0.1rem solid ${({ theme }) => theme.gray};
`;

const Row = styled.div`
  margin: 0 -1rem;
  display: flex;
  flex-direction: column;
  @media screen and ${devices.lg} {
    flex-direction: row;

    ${Input} {
      flex: 1 auto;
      margin: 0 1rem;
    }
  }
`;

const StyledForm = styled.form`
  & > * {
    margin-bottom: 2rem;
  }
`;

const UserSettingsView = () => {
  const user = useSelector((state) => state.user);

  return (
    <AccountLayout>
      <Wrapper>
        <h1>User Settings</h1>
        <StyledForm>
          <Row>
            <Input value={user.data.firstName} disabled />
            <Input value={user.data.lastName} disabled />
          </Row>
          <Row>
            <Input value={user.data.email} disabled />
          </Row>
        </StyledForm>
      </Wrapper>
    </AccountLayout>
  );
};

export default UserSettingsView;
