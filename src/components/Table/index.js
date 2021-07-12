import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// Utils
import devices from '../../styles/devices';
import daysToPay from '../../utils/daysToPay';

// Components
import Button from '../Elements/Button/Button';

// Styled Components
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 0.1rem solid ${({ theme }) => theme.gray};

  /* Zebra striping */

  tr {
    :hover {
      background: ${({ theme }) => theme.grayLight};
    }
  }

  th {
    font-weight: bold;
    color: white;
    background: ${({ theme }) => theme.primaryDark};
  }

  td,
  th {
    padding: 6px;
    text-align: left;
  }

  @media screen and ${devices.s} {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid #ccc;
    }

    td {
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
      :last-child {
        display: flex;
        padding: 0.6rem;
      }
      ${Button} {
        flex: 1;
        width: 100%;
      }
    }

    td:before {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    td:nth-of-type(1):before {
      content: 'Pożyczyłeś';
    }

    td:nth-of-type(2):before {
      content: 'Do spłaty';
    }

    td:nth-of-type(3):before {
      content: 'Data';
    }

    td:nth-of-type(4):before {
      content: 'Data spłaty';
    }

    td:nth-of-type(5):before {
      content: 'Status';
    }
  }

  @media screen and ${devices.md} {
    th,
    td {
      padding: 2rem;
    }

    td {
      border-bottom: 1px solid ${({ theme }) => theme.gray};
      text-align: left;
    }
  }
`;

const Table = ({ loans }) => {
  const history = useHistory();

  const handlePayButton = (id) =>
    history.push({
      pathname: `/konto/pozyczka/${id}`,
      state: {
        id,
      },
    });

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Pożyczyłeś</th>
          <th>Do spłaty</th>
          <th>Data</th>
          <th>Data spłaty</th>
          <th>Status</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {loans.map((loan) => (
          <tr key={loan._id}>
            <td>{loan.value}</td>
            <td>{loan.value - loan.paid}</td>
            <td>{`${new Date(loan.createdAt).toLocaleDateString()}`}</td>
            <td>{daysToPay(loan.createdAt, loan.days)}</td>
            <td>{loan.isActive ? 'Aktywna' : 'Zamknięta'}</td>
            {loan.isActive ? (
              <td>
                <Button type='button' onClick={() => handlePayButton(loan._id)}>
                  Spłać
                </Button>
              </td>
            ) : (
              <td>
                <Button type='button'>Zamknięta</Button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
Table.propTypes = {
  loans: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      days: PropTypes.number.isRequired,
      paid: PropTypes.number.isRequired,
      isActive: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Table;
