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

const UserHistoryView = () => (
  <AccountLayout>
    <Wrapper>
      <h1>User history</h1>
    </Wrapper>
  </AccountLayout>
);

export default UserHistoryView;
