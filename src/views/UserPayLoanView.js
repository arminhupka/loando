import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { getLoanDetails, payLoan } from '../actions/loanActions';

// Components
import AccountLayout from '../layouts/AccountLayout';
import Input from '../components/Elements/Input/Input';
import Button from '../components/Elements/Button/Button';

// Styled Components
const Wrapper = styled.div`
  padding: 2rem;
  background: #fff;
  border: 0.1rem solid ${({ theme }) => theme.gray};
`;

const UserPayLoanView = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const loanDetails = useSelector((state) => state.user.displayedLoan);

  const inputRef = useRef(null);

  const {
    state: { id },
  } = useLocation();

  const handlePayButton = () => {
    dispatch(payLoan(id, Number(inputRef.current.value)));
  };

  useEffect(() => {
    dispatch(getLoanDetails(id));
  }, []);

  return (
    <AccountLayout>
      <Wrapper>
        {isLoading ? (
          <h1>Wczytywanie ...</h1>
        ) : (
          <>
            <h1>Spłać pożyczkę</h1>
            {loanDetails ? (
              <>
                <h2>KWOTA {loanDetails.value}</h2>
                <h2>SPŁACONO {loanDetails.paid}</h2>
                {loanDetails.isActive ? <h1>AKTYWNA</h1> : <h1>ZAMKNIĘTA</h1>}
              </>
            ) : null}
            <Input ref={inputRef} type='number' />
            <Button type='button' onClick={handlePayButton}>
              Spłać
            </Button>
          </>
        )}
      </Wrapper>
    </AccountLayout>
  );
};

export default UserPayLoanView;
