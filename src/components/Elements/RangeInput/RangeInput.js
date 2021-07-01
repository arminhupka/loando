import styled from 'styled-components';

const RangeInput = styled.input`
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

export default RangeInput;
