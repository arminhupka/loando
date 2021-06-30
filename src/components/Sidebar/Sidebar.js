import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const SidebarWrapper = styled.aside`
  height: 100%;
  width: 100%;
  max-width: 30rem;
  color: #fff;
  background: ${({ theme }) => theme.primaryDark};
`;

const StyledList = styled.ul``;

const StyledItem = styled.li`
  font-weight: 600;
  border-bottom: 0.1rem solid ${({ theme }) => theme.primary};

  a {
    padding: 2rem;
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 1rem;
    font-size: 2rem;
  }

  :hover {
    background: ${({ theme }) => theme.primary};
    border-bottom: 0.1rem solid ${({ theme }) => theme.primaryDark};
  }
`;

const Sidebar = () => (
  <SidebarWrapper>
    <StyledList>
      <StyledItem>
        <Link to='/konto'>
          <FaHome /> Dashboard
        </Link>
      </StyledItem>
      <StyledItem>
        <Link to='/konto/nowa-pozyczka'>
          <FaHome /> Nowa pożyczka
        </Link>
      </StyledItem>
      <StyledItem>
        <Link to='/konto/ustawienia'>
          <FaHome /> Historia
        </Link>
      </StyledItem>
      <StyledItem>
        <Link to='/konto/ustawienia'>
          <FaHome /> Ustawienia
        </Link>
      </StyledItem>
      <StyledItem>
        <Link to='/'>
          <FaHome /> Wyloguj
        </Link>
      </StyledItem>
    </StyledList>
  </SidebarWrapper>
);

export default Sidebar;
