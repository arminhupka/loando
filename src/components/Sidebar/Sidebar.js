import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { userLogout } from '../../actions/userActions';

// Styled Components
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

  :last-child {
    padding: 2rem;
    display: flex;
    align-items: center;
  }

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

const Sidebar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const handleLogout = () => dispatch(userLogout());

  if (!user.user) {
    return <Redirect to='/' />;
  }

  return (
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
        <StyledItem onClick={handleLogout}>
          <FaHome /> Wyloguj
        </StyledItem>
      </StyledList>
    </SidebarWrapper>
  );
};

export default Sidebar;
