import React from 'react';
import styled from 'styled-components';
import { HiMenuAlt3 } from 'react-icons/hi';

// Hooks
import useModalState from '../../hooks/useModalState';

// Components
import { Container } from '../../styles/GlobalStyle';
import Nav from './Nav/Nav';

const StyledButton = styled.button``;

const StyledHeader = styled.header`
  height: 8rem;
  background: red;

  ${Container} {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${StyledButton} {
      display: flex;
      background: none;
      border: none;
      svg {
        font-size: 3rem;
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`;

const Header = () => {
  const { isOpen, onToggle } = useModalState(true);

  return (
    <StyledHeader>
      <Container>
        <h1>Branding</h1>
        <Nav isOpen={isOpen} onToggle={onToggle} />
        <StyledButton onClick={onToggle}>
          <HiMenuAlt3 />
        </StyledButton>
      </Container>
    </StyledHeader>
  );
};

export default Header;
