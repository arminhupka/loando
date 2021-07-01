import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const NotificationWrapper = styled.div`
  padding: 2rem;
  color: #fff;
  font-weight: 700;
  text-align: center;

  ${({ type }) =>
    type === 'error' &&
    css`
      background: #e50c0c;
    `}
`;

const NotificationBar = ({ msg, type }) => (
  <NotificationWrapper type={type}>
    <p>{msg}</p>
  </NotificationWrapper>
);

NotificationBar.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default NotificationBar;
