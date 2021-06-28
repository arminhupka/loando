import React from 'react';
import styled from 'styled-components';

// Components
import { Container } from '../../styles/GlobalStyle';
import StepItem from './StepItem/StepItem';
import devices from '../../styles/devices';

// Styled Components
const StyledContainer = styled(Container)`
  h2 {
    font-size: 3.5rem;
    text-align: center;
  }
`;

const StyledGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 2rem;

  @media screen and ${devices.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Steps = () => (
  <section>
    <StyledContainer>
      <h2>Pożyczka Loando w 3 krokach</h2>
      <StyledGrid>
        <StepItem />
        <StepItem />
        <StepItem />
      </StyledGrid>
    </StyledContainer>
  </section>
);

export default Steps;
