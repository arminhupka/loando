import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { getUserLoans } from '../actions/loanActions';

// Components
import AccountLayout from '../layouts/AccountLayout';
import Table from '../components/Table';

// Styled Components
const Wrapper = styled.div`
  padding: 2rem;
  background: #fff;
  border: 0.1rem solid ${({ theme }) => theme.gray};
`;

const UserHistoryView = () => {
  const dispatch = useDispatch();
  const loans = useSelector((state) => state.user.loans);

  useEffect(() => {
    dispatch(getUserLoans());
  }, []);

  return (
    <AccountLayout>
      <Wrapper>
        <h1>Twoja historia pożyczek</h1>
        <Table loans={loans} />
      </Wrapper>
    </AccountLayout>
  );
};

export default UserHistoryView;
