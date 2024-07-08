import React from 'react';
import styled from 'styled-components';

const TransactionsContainer = styled.div`
  padding: 20px;
  background-color: #e0ffe0;
  flex-grow: 1;
  color: black;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 10px;
    border: 1px solid #ccc;
  }
`;

const Transactions = ({ data }) => {
  return (
    <TransactionsContainer>
      <h2>Latest Loads are displayed here</h2>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Credit</th>
            <th>A/c Balance</th>
            <th>UTR/RRN</th>
            <th>A/c No /UPI</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.credit}</td>
              <td>{row.balance}</td>
              <td>{row.utr}</td>
              <td>{row.accNo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TransactionsContainer>
  );
};

export default Transactions;
