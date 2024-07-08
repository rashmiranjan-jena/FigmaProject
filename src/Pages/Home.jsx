import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #4CAF50;
  color: white;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Home = ({ accountData }) => {
  return (
    <Container>
      <h2>Latest Loads</h2>
      <Table>
        <thead>
          <tr>
            <Th>Date</Th>
            <Th>Credit</Th>
            <Th>A/c Balance</Th>
            <Th>UTR/RRN</Th>
            <Th>A/c No / UPI</Th>
          </tr>
        </thead>
        <tbody>
          {accountData.map((row, index) => (
            <tr key={index}>
              <Td>{row.date}</Td>
              <Td>{row.credit}</Td>
              <Td>{row.balance}</Td>
              <Td>{row.utr}</Td>
              <Td>{row.accNo}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
