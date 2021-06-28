import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
    *, *::before, *::after {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    
    html {
      font-size: 62.5%;
    }
    
    body {
      font-size: 1.4rem;
    }

`;

export const Container = styled.div`
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 2.4rem;
`;

export default GlobalStyle;
