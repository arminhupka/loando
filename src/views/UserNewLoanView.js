import React from 'react';
import styled from 'styled-components';

// Components
import AccountLayout from '../layouts/AccountLayout';

// Styled Components
const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background: #fff;
  border: 0.1rem solid ${({ theme }) => theme.gray};

  h1 {
    margin-bottom: 2rem;
  }
`;

const FormWrapper = styled.div`
  padding: 2rem;
  color: #fff;
  background: ${({ theme }) => theme.primary};
`;

const UserNewLoanView = () => (
  <AccountLayout>
    <Wrapper>
      <h1>Nowa pożyczka</h1>
      <FormWrapper>
        <h2>Ustaw parametry pożyczki</h2>
      </FormWrapper>
    </Wrapper>
  </AccountLayout>
);

export default UserNewLoanView;
