import React from 'react';
import styled from 'styled-components';

import background from '../../assets/images/girl_computer.jpeg';

// Components
import { Container } from '../../styles/GlobalStyle';
import LoanCalc from '../LoanCalc/LoanCalc';
import devices from '../../styles/devices';

// StyledComponents
const Wrapper = styled.div`
  position: relative;
  height: 50rem;
  padding: 2rem 0;
  color: #fff;
  background: url(${background}) no-repeat center;
  background-size: cover;

  ${Container} {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    z-index: 1;

    @media screen and ${devices.lg} {
      flex-direction: row;
    }
  }
`;

const TextWrapper = styled.div`
  h1 {
    margin-bottom: 1rem;
  }
  p {
    width: 70%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.primary};
  opacity: 0.4;
`;

const Hero = () => (
  <Wrapper>
    <Container>
      <TextWrapper>
        <h1>Some awesome description</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deserunt ducimus expedita impedit iusto minus tenetur
          totam voluptates. Itaque, odit.
        </p>
      </TextWrapper>
      <LoanCalc />
    </Container>
    <Overlay />
  </Wrapper>
);

export default Hero;
