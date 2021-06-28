import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import devices from '../../../styles/devices';

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 70%;
  background: #fff;
  transform: translateX(-100%);
  z-index: 10;

  @media screen and ${devices.lg} {
    position: unset;
    height: 100%;
    margin-left: auto;
    width: unset;
    background: transparent;
    transform: translateX(0);
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
    `}
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  @media screen and ${devices.lg} {
    height: 100%;
    flex-direction: row;
  }
`;

const StyledItem = styled.li`
  font-size: 2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.gray};

  a {
    height: 100%;
    padding: 2rem;
    display: flex;
    align-items: center;
  }

  @media screen and ${devices.lg} {
    position: relative;
    margin-right: 4rem;
    display: flex;
    align-items: center;
    font-size: unset;
    border-bottom: none;

    a {
      padding: 0;
    }

    :hover::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.5rem;
      left: 0;
      bottom: 0;
      display: block;
      background: ${({ theme }) => theme.primaryDark};
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  z-index: 9;

  @media screen and ${devices.lg} {
    display: none;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

const Nav = ({ isOpen, onToggle }) => (
  <>
    <StyledNav isOpen={isOpen}>
      <StyledList>
        <StyledItem>
          <Link to='/'>Strona główna</Link>
        </StyledItem>
        <StyledItem>
          <Link to='/'>Home</Link>
        </StyledItem>
        <StyledItem>
          <Link to='/'>O Nas</Link>
        </StyledItem>
        <StyledItem>
          <Link to='/kontakt'>Kontakt</Link>
        </StyledItem>
      </StyledList>
    </StyledNav>
    <Overlay isOpen={isOpen} onClick={onToggle} />
  </>
);

Nav.propTypes = {
  isOpen: propTypes.bool.isRequired,
  onToggle: propTypes.func.isRequired,
};

export default Nav;
