import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import devices from '../styles/devices';

// Actions
import { getLoanDetails } from '../actions/loanActions';

// Components
import AccountLayout from '../layouts/AccountLayout';
import Input from '../components/Elements/Input/Input';
import Button from '../components/Elements/Button/Button';
// import RangeInput from '../components/Elements/RangeInput/RangeInput';

// Styled Components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 2rem;
  background: #fff;
  border: 0.1rem solid ${({ theme }) => theme.gray};

  :last-child {
    margin-bottom: 0;
  }

  h1 {
    display: block;
    margin-bottom: 2rem;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`;

const StyledTr = styled.tr`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  & > * {
    padding: 1rem;
    margin-bottom: 1rem;
  }

  @media screen and ${devices.md} {
    flex-direction: row;
  }
`;

const StyledTh = styled.th`
  width: 100%;
  margin-right: 1rem;
  color: #fff;
  background: ${({ theme }) => theme.primary};
  @media screen and ${devices.md} {
    flex: 0 20rem;
  }
`;

const StyledTd = styled.td`
  border: 0.1rem solid ${({ theme }) => theme.gray};
  @media screen and ${devices.md} {
    flex: 1;
  }
`;

const UserLoanDetailsView = () => {
  const dispatch = useDispatch();
  const displayedLoan = useSelector((state) => state.displayedLoan);

  const {
    state: { id },
  } = useLocation();

  useEffect(() => {
    dispatch(getLoanDetails(id));
  }, []);

  return (
    <AccountLayout>
      <Wrapper>
        <h1>Szczegóły pożyczki</h1>
        <StyledTable>
          <StyledTr>
            <StyledTh>ID</StyledTh>
            <StyledTd>{displayedLoan.data._id}</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTh>Kwota pożyczki:</StyledTh>
            <StyledTd>{displayedLoan.data.value} PLN</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTh>Data przyznania</StyledTh>
            <StyledTd>{moment(displayedLoan.data.createdAt).format('DD.MM.YYYY')}</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTh>Okres pożyczkowy</StyledTh>
            <StyledTd>{displayedLoan.data.days} dni</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTh>Status pożyczki</StyledTh>
            <StyledTd>{displayedLoan.data.isActive ? 'Aktywna' : 'Zamknięta'}</StyledTd>
          </StyledTr>
        </StyledTable>
      </Wrapper>
      <Wrapper>
        <h1>Spłata</h1>
        <StyledTable>
          <StyledTr>
            <StyledTh>Całkowita kwota do spłaty</StyledTh>
            <StyledTd>{displayedLoan.data.toPay} PLN</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTh>Termin spłaty</StyledTh>
            <StyledTd>{moment(displayedLoan.data.createdAt).add(displayedLoan.data.days, 'days').format('DD.MM.YYYY')}</StyledTd>
          </StyledTr>
        </StyledTable>
        <Input type='text' pattern='\d*' maxLength='2' />
        <Button>Spłać</Button>
      </Wrapper>
    </AccountLayout>
  );
};

export default UserLoanDetailsView;
