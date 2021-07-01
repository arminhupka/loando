import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// Components
import AccountLayout from '../layouts/AccountLayout';
import RangeInput from '../components/Elements/RangeInput/RangeInput';
import Button from '../components/Elements/Button/Button';

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
  const newLoanValues = useSelector((state) => state.newLoan);

  const handleValueRange = () => {
    // setLoanValue(e.target.value);
  };

  const handleDaysRange = () => {
    // setDays(e.target.value);
  };

  return (
    <AccountLayout>
      <Wrapper>
        <h1>Nowa pożyczka</h1>
        <FormWrapper>
          <h2>Ustaw parametry pożyczki</h2>
          <RangeInput type='range' min={100} max={3500} step={100} value={newLoanValues.value} onChange={handleValueRange} />
          <RangeInput type='range' min={5} max={30} step={5} value={newLoanValues.days} onChange={handleDaysRange} />
          <Button alternative>Weź pożyczkę</Button>
        </FormWrapper>
      </Wrapper>
    </AccountLayout>
  );
};

export default UserNewLoanView;
