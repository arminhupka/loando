import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import devices from '../../styles/devices';

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
      content: 'Status';
    }

    td:nth-of-type(5):before {
      content: 'Akcja';
    }
  }

  @media screen and ${devices.lg} {
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

const Table = ({ loans }) => (
  <StyledTable>
    <thead>
      <tr>
        <th>Pożyczyłeś</th>
        <th>Do spłaty</th>
        <th>Data</th>
        <th>Status</th>
        <th>Akcja</th>
      </tr>
    </thead>
    <tbody>
      {loans.map((loan) => (
        <tr key={loan._id}>
          <td>{loan.value}</td>
          <td>3200</td>
          <td>{`${new Date(loan.createdAt).toLocaleDateString()}`}</td>
          <td>Aktywna</td>
          <td>
            <Button type='button'>Spłać</Button>
          </td>
        </tr>
      ))}
    </tbody>
  </StyledTable>
);

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
