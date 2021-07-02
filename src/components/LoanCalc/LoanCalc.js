import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import devices from '../../styles/devices';

// Components
import Button from '../Elements/Button/Button';
import RangeInput from '../Elements/RangeInput/RangeInput';

// Actions
import { setNewLoan } from '../../actions/loanActions';

// Styled Components
const CalcWrapper = styled.div`
  width: 100%;
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

const LoanCalc = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.user);

  const [loanValue, setLoanValue] = useState(1000);
  const [days, setDays] = useState(20);

  const handleRangeInput = (e) => {
    setLoanValue(e.target.value);
  };

  const handleDaysRange = (e) => {
    setDays(e.target.value);
  };

  const handleButton = () => {
    dispatch(setNewLoan(loanValue, days));
    if (user.data) {
      history.push('/konto/nowa-pozyczka');
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus molestias sunt temporibus velit voluptatum. Aut
          ducimus enim nam soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa cupiditate dicta
          dolore nihil vero?
        </p>
      </InfoWrapper>
    </CalcWrapper>
  );
};

export default LoanCalc;
