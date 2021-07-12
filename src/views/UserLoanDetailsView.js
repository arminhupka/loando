import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { getLoanDetails } from '../actions/loanActions';

// Components
import AccountLayout from '../layouts/AccountLayout';
// import Input from '../components/Elements/Input/Input';
// import Button from '../components/Elements/Button/Button';
// import RangeInput from '../components/Elements/RangeInput/RangeInput';

// Styled Components
const Wrapper = styled.div`
  padding: 2rem;
  background: #fff;
  border: 0.1rem solid ${({ theme }) => theme.gray};
`;

const UserLoanDetailsView = () => {
  const dispatch = useDispatch();
  const displayedLoan = useSelector((state) => state.displayedLoan);

  const {
    state: { id },
  } = useLocation();

  useEffect(() => {
    dispatch(getLoanDetails(id));
  }, []);

  return (
    <AccountLayout>
      <Wrapper>
        <h1>Szczegóły pożyczki {displayedLoan.data._id}</h1>
      </Wrapper>
    </AccountLayout>
  );
};

export default UserLoanDetailsView;
