import React, { useState } from 'react';
import styled from 'styled-components';

import devices from '../../styles/devices';

// Components
import Button from '../Elements/Button/Button';

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

const StyledRange = styled.input`
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  ::-webkit-slider-container {
    padding: 0.2rem;
    background: #fff;
    border-radius: 2rem;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 2rem;
    height: 2rem;
    background: ${({ theme }) => theme.primary};
    border-radius: 50%;
    cursor: pointer;
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
  const [loanValue, setLoanValue] = useState(1000);
  const [days, setDays] = useState(5);

  const handleRangeInput = (e) => setLoanValue(e.target.value);

  const handleDaysRange = (e) => setDays(e.target.value);

  return (
    <CalcWrapper>
      <TopWrapper>
        <h2>Ile kosztuje pożyczka?</h2>
        <Row>
          <span>Pożyczasz</span>
          <span>{loanValue} zł</span>
        </Row>
        <StyledRange type='range' min={100} max={3500} step={100} value={loanValue} onChange={handleRangeInput} />
        <Row>
          <span>Okres</span>
          <span>{days} dni</span>
        </Row>
        <StyledRange type='range' min={5} max={30} step={5} value={days} onChange={handleDaysRange} />
        <Button alternative>Zaloguj się i weź pożyczkę</Button>
      </TopWrapper>
      <InfoWrapper>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus molestias sunt temporibus velit voluptatum. Aut
        ducimus enim nam soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa cupiditate dicta
        dolore nihil vero?
      </InfoWrapper>
    </CalcWrapper>
  );
};

export default LoanCalc;
