import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { getUserLoans } from '../actions/loanActions';

// Components
import AccountLayout from '../layouts/AccountLayout';

// Styled Components
const Wrapper = styled.div`
  padding: 2rem;
  background: #fff;
  border: 0.1rem solid ${({ theme }) => theme.gray};
`;

const UserProfileView = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserLoans());
  }, []);

  return (
    <AccountLayout>
      <Wrapper>
        <h1>Witaj {user.data.firstName}</h1>
        <h2>Masz obecnie {user.loans.length} pożyczek</h2>
      </Wrapper>
    </AccountLayout>
  );
};

export default UserProfileView;
