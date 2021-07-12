import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { cleanGrantedLoan, getUserLoans, takeNewLoan } from '../actions/loanActions';

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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  span {
    :first-child {
      font-size: 2rem;
    }
    :last-child {
      font-size: 2.8rem;
      font-weight: 600;
    }
  }
`;

const UserNewLoanView = () => {
  const dispatch = useDispatch();
  const newLoanValues = useSelector((state) => state.newLoan);
  const grantedLoan = useSelector((state) => state.grantedLoan);
  const loansList = useSelector((state) => state.loansList);

  const [value, setValue] = useState(newLoanValues.value);
  const [days, setDays] = useState(newLoanValues.days);

  const handleValueRange = (e) => setValue(e.target.value);

  const handleDaysRange = (e) => setDays(e.target.value);

  const handleCleanButton = () => dispatch(cleanGrantedLoan());

  const handleSubmitButton = () => dispatch(takeNewLoan());

  useEffect(() => {
    dispatch(getUserLoans());
  }, []);

  return (
    <AccountLayout>
      <Wrapper>
        <h1>Nowa pożyczka</h1>
        {loansList.data.length < 5 ? <h1>OK</h1> : <h1>NIE OK</h1>}
        {!grantedLoan.isLoading ? (
          <>
            {grantedLoan.data ? (
              <>
                <h1>PRZYZNANO</h1>
                <Button onClick={handleCleanButton}>Zamknij okno</Button>
              </>
            ) : (
              <FormWrapper>
                <Row>
                  <span>Pożyczasz</span>
                  <span>{value}</span>
                </Row>
                <RangeInput type='range' min={100} max={3500} step={100} value={value} onChange={handleValueRange} />
                <Row>
                  <span>Okres</span>
                  <span>{days}</span>
                </Row>
                <RangeInput type='range' min={5} max={30} step={5} value={days} onChange={handleDaysRange} />
                <Button alternative onClick={handleSubmitButton}>
                  Weź pożyczkę
                </Button>
              </FormWrapper>
            )}
          </>
        ) : (
          <h1>Ładowanie</h1>
        )}
      </Wrapper>
    </AccountLayout>
  );
};

export default UserNewLoanView;
