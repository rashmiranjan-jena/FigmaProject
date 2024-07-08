import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Component/Sidebar';
import Home from './Pages/Home';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  border-bottom: 1px solid #ccc;
`;

const Dropdown = styled.select`
  padding: 5px;
  margin-left: 10px;
`;

const Balance = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: green;
`;

const companies = {
  Company1: {
    accounts: [
      {
        name: 'Account 1',
        data: [
          { date: '07/05/2024 01:04 PM', credit: '₹ 21,337', balance: '₹ 21,337', utr: '1000000', accNo: 'AC0CF7RUY407QHU' },
          { date: '19/03/2024 11:33 PM', credit: '₹ 16,000', balance: '₹ 16,000', utr: 'CMS53938564916', accNo: 'BC1GH8XYZ901JKL' },
          { date: '28/03/2024 05:09 PM', credit: '₹ 5,015.69', balance: '₹ 5,015.69', utr: 'CMS3956666735', accNo: 'DE2IJ9LMN234OPQ' },
          { date: '04/05/2024 12:38 PM', credit: '₹ 21,337', balance: '₹ 21,337', utr: 'CMS4136431811', accNo: '0104SLNEFTPL' },
          { date: '07/05/2024 01:04 PM', credit: '₹ 21,337', balance: '₹ 21,337', utr: 'CMS4019645011', accNo: 'FG3KL0OPQ567RST' }
        ],
      },
      {
        name: 'Account 2',
        data: [
          { date: '04/05/2024 12:38 PM', credit: '₹ 21,337', balance: '₹ 21,337', utr: 'CMS4136431811', accNo: '0104SLNEFTPL' },
          { date: '28/03/2024 05:09 PM', credit: '₹ 5,015.69', balance: '₹ 5,015.69', utr: 'CMS3956666735', accNo: 'DE2IJ9LMN234OPQ' },
          { date: '07/05/2024 01:04 PM', credit: '₹ 21,337', balance: '₹ 21,337', utr: 'CMS4019645011', accNo: 'AC0CF7RUY407QHU' },
          { date: '19/03/2024 11:33 PM', credit: '₹ 16,000', balance: '₹ 16,000', utr: 'CMS53938564916', accNo: 'BC1GH8XYZ901JKL' },
          { date: '28/03/2024 05:09 PM', credit: '₹ 5,015.69', balance: '₹ 5,015.69', utr: 'CMS3956666735', accNo: 'DE2IJ9LMN234OPQ' }
        ],
      },
    ],
  },
  Company2: {
    accounts: [
      {
        name: 'Account 3',
        data: [
          { date: '28/03/2024 05:09 PM', credit: '₹ 21,337', balance: '₹ 21,337', utr: 'CMS4019645011', accNo: 'ACT861VM9R67Z5C' },
          { date: '19/03/2024 11:33 PM', credit: '₹ 5,015.69', balance: '₹ 5,015.69', utr: 'CMS53948064984', accNo: 'FG3KL0OPQ567RST' },
          { date: '07/05/2024 01:04 PM', credit: '₹ 21,337', balance: '₹ 21,337', utr: 'CMS4019645011', accNo: 'AC0CF7RUY407QHU' },
          { date: '19/03/2024 11:33 PM', credit: '₹ 16,000', balance: '₹ 16,000', utr: 'CMS53938564916', accNo: 'BC1GH8XYZ901JKL' },
          { date: '28/03/2024 05:09 PM', credit: '₹ 5,015.69', balance: '₹ 5,015.69', utr: 'CMS3956666735', accNo: 'DE2IJ9LMN234OPQ' }
        ],
      },
      {
        name: 'Account 4',
        data: [
          { date: '28/03/2024 05:09 PM', credit: '₹ 5,015.69', balance: '₹ 5,015.69', utr: 'CMS3956666735', accNo: 'AC0CF7RUY407QHU' },
          { date: '04/05/2024 12:38 PM', credit: '₹ 21,337', balance: '₹ 21,337', utr: 'CMS4136431811', accNo: 'DE2IJ9LMN234OPQ' },
          { date: '07/05/2024 01:04 PM', credit: '₹ 21,337', balance: '₹ 21,337', utr: 'CMS4019645011', accNo: 'ACT861VM9R67Z5C' },
          { date: '19/03/2024 11:33 PM', credit: '₹ 16,000', balance: '₹ 16,000', utr: 'CMS53938564916', accNo: 'BC1GH8XYZ901JKL' },
          { date: '28/03/2024 05:09 PM', credit: '₹ 5,015.69', balance: '₹ 5,015.69', utr: 'CMS3956666735', accNo: 'FG3KL0OPQ567RST' }
        ],
      },
    ],
  },
};

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState('Company1');
  const [selectedAccount, setSelectedAccount] = useState('Account 1');
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    const accountData = companies[selectedCompany].accounts.find(acc => acc.name === selectedAccount).data;
    const balanceSum = accountData.reduce((total, row) => total + parseFloat(row.balance.replace(/[^0-9.-]+/g,"")), 0);
    setTotalBalance(balanceSum);
  }, [selectedCompany, selectedAccount]);

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
    setSelectedAccount(companies[e.target.value].accounts[0].name);
  };

  const handleAccountChange = (e) => {
    setSelectedAccount(e.target.value);
  };

  const accountData = companies[selectedCompany].accounts.find(acc => acc.name === selectedAccount).data;

  return (
    <Router>
      <Header>
        <div>
          <span>Company:</span>
          <Dropdown value={selectedCompany} onChange={handleCompanyChange}>
            {Object.keys(companies).map(company => (
              <option key={company} value={company}>{company}</option>
            ))}
          </Dropdown>
        </div>
        <div>
          <span>Account:</span>
          <Dropdown value={selectedAccount} onChange={handleAccountChange}>
            {companies[selectedCompany].accounts.map(account => (
              <option key={account.name} value={account.name}>{account.name}</option>
            ))}
          </Dropdown>
        </div>
        <Balance>
          Available Balance: ₹ {totalBalance.toFixed(2)}
        </Balance>
      </Header>
      <AppContainer>
        <Sidebar />
        <Routes>
          <Route path="/loads" element={<Home accountData={accountData} />} />
          <Route path="/statements" element={<div>Statements Page</div>} />
          <Route path="/transactions" element={<Home accountData={accountData} />} />
          <Route path="/logout" element={<div>Logout Page</div>} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
