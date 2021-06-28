import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 70%;
  background: #fff;
  transform: translateX(-100%);
  z-index: 10;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
    `}
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StyledItem = styled.li`
  padding: 2rem;
  font-size: 2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.gray};
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
        <StyledItem>Home</StyledItem>
        <StyledItem>Services</StyledItem>
        <StyledItem>About</StyledItem>
        <StyledItem>Contact</StyledItem>
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
