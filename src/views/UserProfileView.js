import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// Components
import AccountLayout from '../layouts/AccountLayout';

// Styled Components
const Wrapper = styled.div`
  padding: 2rem;
  background: #fff;
  border: 0.1rem solid ${({ theme }) => theme.gray};
`;

const UserProfileView = () => {
  const user = useSelector((state) => state.user);

  const pluralsLoansNameGenerator = (num) => {
    if (num === 1) {
      return 'pożyczkę';
    }

    if (num === 2 && num < 5) {
      return 'pożyczki';
    }

    if (num > 5) {
      return 'pożyczek';
    }

    return null;
  };

  return (
    <AccountLayout>
      <Wrapper>
        {user.data && (
          <>
            <h1>Witaj {user.data.firstName}</h1>
            <p>
              Masz obecnie {user.data.loans.length} aktywne {pluralsLoansNameGenerator(user.data.loans.length)}
            </p>
          </>
        )}
      </Wrapper>
    </AccountLayout>
  );
};

export default UserProfileView;
