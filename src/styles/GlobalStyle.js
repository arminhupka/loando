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
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    background: #fafafa;
  }

  a {
    color: inherit;
    font-weight: 600;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  section {
    padding: 5rem 0;
    font-size: initial;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

`;

export const Container = styled.div`
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 2.4rem;
`;

export default GlobalStyle;
