import React from 'react';
import styled from 'styled-components';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link, useHistory } from 'react-router-dom';
import devices from '../../styles/devices';

// Hooks
import useModalState from '../../hooks/useModalState';

// Components
import { Container } from '../../styles/GlobalStyle';
import Nav from './Nav/Nav';
import Button from '../Elements/Button/Button';

const StyledButton = styled.button``;

const StyledHeader = styled.header`
  height: 8rem;
  background: #fff;
  border-bottom: 0.1rem solid ${({ theme }) => theme.gray};

  ${Container} {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${StyledButton} {
      display: flex;
      background: none;
      border: none;
      svg {
        font-size: 3rem;
        color: ${({ theme }) => theme.primary};
      }
    }

    h1 {
      color: ${({ theme }) => theme.primary};
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    ${Button} {
      display: none;
    }

    @media screen and ${devices.lg} {
      justify-content: flex-start;
      ${StyledButton} {
        display: none;
      }

      ${Button} {
        display: initial;
      }
    }
  }
`;

const Header = () => {
  const { isOpen, onToggle } = useModalState();
  const history = useHistory();

  const handleButton = () => history.push('/zaloguj');

  return (
    <StyledHeader>
      <Container>
        <Link to='/'>
          <h1>Loando</h1>
        </Link>
        <Nav isOpen={isOpen} onToggle={onToggle} />
        <StyledButton onClick={onToggle}>
          <HiMenuAlt3 />
        </StyledButton>
        <Button onClick={handleButton}>Zaloguj się</Button>
      </Container>
    </StyledHeader>
  );
};

export default Header;
