import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AiOutlineFileDone } from 'react-icons/ai';

const Wrapper = styled.div`
  text-align: center;

  p {
    margin-top: 2rem;
  }
`;

const IconWrapper = styled.div`
  padding: 2rem;
  display: inline-flex;
  margin-bottom: 1.5rem;
  color: #fff;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;

  svg {
    font-size: 6rem;
  }
`;

const StepItem = ({ title, text }) => (
  <Wrapper>
    <IconWrapper>
      <AiOutlineFileDone />
    </IconWrapper>
    <h1>{title}</h1>
    <p>{text}</p>
  </Wrapper>
);

StepItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default StepItem;
