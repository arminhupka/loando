import React from 'react';
import styled from 'styled-components';

// Components
import AccountLayout from '../layouts/AccountLayout';

// Styled Components
const Wrapper = styled.div`
  padding: 2rem;
  background: #fff;
  border: 0.1rem solid ${({ theme }) => theme.gray};
`;

const UserSettingsView = () => (
  <AccountLayout>
    <Wrapper>
      <h1>User Settings</h1>
    </Wrapper>
  </AccountLayout>
);

export default UserSettingsView;
