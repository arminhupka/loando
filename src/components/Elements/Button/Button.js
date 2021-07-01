import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 1.5rem 3rem;
  font-weight: 600;
  color: #fff;
  background: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 0.3rem;

  :hover {
    background: ${({ theme }) => theme.primaryDark};
  }

  ${({ alternative }) =>
    alternative &&
    css`
      color: ${({ theme }) => theme.primary};
      background: #fff;
      :hover {
        background: ${({ theme }) => theme.gray};
      }
    `};
`;

export default Button;
