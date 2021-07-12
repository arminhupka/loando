import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import devices from '../../styles/devices';

// Hooks
import useCommission from '../../hooks/useCommission';

// Actions
import { setNewLoan } from '../../actions/loanActions';

// Components
import Button from '../Elements/Button/Button';
import RangeInput from '../Elements/RangeInput/RangeInput';

// Styled Components
const CalcWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.primary};

  h2 {
    margin-bottom: 2rem;
  }

  ${Button} {
    margin-top: 2rem;
  }

  @media screen and ${devices.lg} {
    max-width: 40rem;
    margin-top: 0;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  span {
    font-size: 2rem;

    :nth-child(2) {
      font-size: 2em;
      font-weight: 500;
    }
  }
`;

const TopWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;

  ${Row} {
    :nth-of-type(2) {
      margin-top: 1rem;
    }
  }

  & > * {
    margin-bottom: 1rem;
  }
`;

const InfoWrapper = styled.div`
  padding: 2rem;
  color: initial;
  background: #fff;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTr = styled.tr`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  border-bottom: 0.1rem solid ${({ theme }) => theme.gray};
  :last-child {
    font-weight: 600;
  }
`;

const StyledTd = styled.td``;

const LoanCalc = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.user);

  const [loanValue, setLoanValue] = useState(1000);
  const [days, setDays] = useState(20);

  const { showPayDay, commission, overallPayment } = useCommission(loanValue, days);

  const handleRangeInput = (e) => {
    setLoanValue(Number(e.target.value));
  };

  const handleDaysRange = (e) => {
    setDays(Number(e.target.value));
  };

  const handleButton = () => {
    dispatch(setNewLoan(loanValue, days));
    if (user.data) {
      history.push('/konto');
    }
    history.push('/zaloguj');
  };
  return (
    <CalcWrapper>
      <TopWrapper>
        <h2>Ile kosztuje pożyczka?</h2>
        <Row>
          <span>Pożyczasz</span>
          <span>{loanValue} zł</span>
        </Row>
        <RangeInput type='range' min={100} max={3500} step={100} value={loanValue} onChange={handleRangeInput} />
        <Row>
          <span>Okres</span>
          <span>{days} dni</span>
        </Row>
        <RangeInput type='range' min={5} max={30} step={5} value={days} onChange={handleDaysRange} />
        {user.data ? (
          <Button alternative onClick={handleButton}>
            Weź nową pożyczkę
          </Button>
        ) : (
          <Button alternative onClick={handleButton}>
            Zaloguj się i weź pożyczkę
          </Button>
        )}
      </TopWrapper>
      <InfoWrapper>
        <StyledTable>
          <tbody>
            <StyledTr>
              <StyledTd>Kwota pożyczki</StyledTd>
              <StyledTd>{loanValue}</StyledTd>
            </StyledTr>
            <StyledTr>
              <StyledTd>Dzień spłaty</StyledTd>
              <StyledTd>{showPayDay()}</StyledTd>
            </StyledTr>
            <StyledTr>
              <StyledTd>Prowizja</StyledTd>
              <StyledTd>{commission()}</StyledTd>
            </StyledTr>
            <StyledTr>
              <StyledTd>Do spłaty</StyledTd>
              <StyledTd>{overallPayment()}</StyledTd>
            </StyledTr>
          </tbody>
        </StyledTable>
      </InfoWrapper>
    </CalcWrapper>
  );
};

export default LoanCalc;
