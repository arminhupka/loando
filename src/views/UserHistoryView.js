import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// Components
import AccountLayout from '../layouts/AccountLayout';
import { getUserLoans } from '../actions/loanActions';

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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserLoans());
  }, []);

  return (
    <AccountLayout>
      <Wrapper>
        <h1>Twoja historia pożyczek</h1>
        <StyledList>
          {user.loans.length !== 0 ? user.loans.map((loan) => <StyledItem key={loan._id}>{loan.value}</StyledItem>) : null}
        </StyledList>
      </Wrapper>
    </AccountLayout>
  );
};

export default UserHistoryView;
