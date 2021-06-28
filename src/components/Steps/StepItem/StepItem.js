import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;

  p {
    margin-top: 2rem;
  }
`;

const StepItem = () => (
  <Wrapper>
    <h1>Step Item</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores autem eos rem! Eligendi est numquam possimus
      recusandae sint ullam?
    </p>
  </Wrapper>
);

export default StepItem;
