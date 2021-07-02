import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// Components
import AccountLayout from '../layouts/AccountLayout';
import RangeInput from '../components/Elements/RangeInput/RangeInput';
import Button from '../components/Elements/Button/Button';
import { takeNewLoan } from '../actions/loanActions';

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
  display: flex;
  flex-direction: column;
  color: #fff;
  background: ${({ theme }) => theme.primary};

  & > * {
    margin-bottom: 1rem;
    :last-child {
      margin-bottom: 0;
    }
  }
`;

const UserNewLoanView = () => {
  const dispatch = useDispatch();
  const newLoanValues = useSelector((state) => state.newLoan);
  const userLoans = useSelector((state) => state.user.loans);

  const [value, setValue] = useState(newLoanValues.value);
  const [days, setDays] = useState(newLoanValues.days);

  const handleValueRange = (e) => setValue(e.target.value);

  const handleDaysRange = (e) => setDays(e.target.value);

  const handleSubmitButton = () => dispatch(takeNewLoan());

  const allowNewLoan = () => {
    const filteredLoans = userLoans.filter((loan) => loan.isActive === true);
    return filteredLoans.length < 5;
  };

  return (
    <AccountLayout>
      <Wrapper>
        <h1>Nowa pożyczka</h1>
        {allowNewLoan() ? (
          <FormWrapper>
            <h2>Ustaw parametry pożyczki</h2>
            <RangeInput type='range' min={100} max={3500} step={100} value={value} onChange={handleValueRange} />
            <RangeInput type='range' min={5} max={30} step={5} value={days} onChange={handleDaysRange} />
            <Button alternative onClick={handleSubmitButton}>
              Weź pożyczkę
            </Button>
          </FormWrapper>
        ) : (
          <h1>Nie możesz obecnie wziąć nowej pożyczki</h1>
        )}
      </Wrapper>
    </AccountLayout>
  );
};

export default UserNewLoanView;
