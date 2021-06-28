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
  margin-top: 4rem;
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
        <StepItem
          title='Składasz wniosek'
          text='Do złożenia wniosku potrzebujesz tylko dwóch rzeczy: dowodu osobistego i swojego konta w banku.'
        />
        <StepItem
          title='Otrzymujesz pieniądze'
          text='Po pozytywnym rozpatrzeniu wniosku, przelejemy środki na Twoje konto najszybciej jak to możliwe.'
        />
        <StepItem
          title='Spłacasz pożyczkę'
          text='Bądź spokojny, przypomnimy Ci odpowiednio wcześniej o terminie spłaty pożyczki.'
        />
      </StyledGrid>
    </StyledContainer>
  </section>
);

export default Steps;
