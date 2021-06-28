import React, { useState } from 'react';
import styled from 'styled-components';
import devices from '../../styles/devices';

// Components
import Button from '../Elements/Button/Button';

// Styled Components
const CalcWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.primary};

  h2 {
    margin-bottom: 2rem;
  }

  @media screen and ${devices.lg} {
    max-width: 40rem;
  }
`;

const StyledRange = styled.input`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LoanCalc = () => {
  const [loanValue, setLoanValue] = useState(0);

  const handleRangeInput = (e) => setLoanValue(e.target.value);

  return (
    <CalcWrapper>
      <h2>Ile kosztuje pożyczka?</h2>
      <Row>
        <span>Pożyczasz</span>
        <span>{loanValue} zł</span>
      </Row>
      <StyledRange type='range' min={100} max={3500} step={100} onChange={handleRangeInput} />
      <Button alternative>Weź pożyczkę</Button>
    </CalcWrapper>
  );
};

export default LoanCalc;
