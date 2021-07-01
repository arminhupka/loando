import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// Components
import AccountLayout from '../layouts/AccountLayout';

// Styled Components
const Wrapper = styled.div`
  padding: 2rem;
  background: #fff;
  border: 0.1rem solid ${({ theme }) => theme.gray};
`;

const StyledList = styled.ul`
  margin-top: 2rem;
`;

const StyledItem = styled.li`
  padding: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
  color: #fff;
  background: ${({ theme }) => theme.primary};

  :hover {
    background: ${({ theme }) => theme.primaryDark};
  }

  :last-child {
    margin-bottom: 0;
  }
`;

const UserHistoryView = () => {
  const loans = useSelector((state) => state.user.data.loans);

  return (
    <AccountLayout>
      <Wrapper>
        <h1>Twoja historia pożyczek</h1>
        <StyledList>
          {loans.length !== 0 ? loans.map((loan) => <StyledItem key={loan._id}>{loan.value}</StyledItem>) : null}
        </StyledList>
      </Wrapper>
    </AccountLayout>
  );
};

export default UserHistoryView;
