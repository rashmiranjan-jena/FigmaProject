import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css'
const SidebarContainer = styled.div`
  width: 200px;
  height: 100vh;
  background-color: white;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
`;


const NavItem = styled(NavLink)`
  width: 100%;
  padding: 10px 20px;
  color: black;
  text-decoration: none;
  &.active {
    color: blue;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <LogoImage src="https://analyticsfoxsoftwares.com/wp-content/uploads/2021/01/ez.png" alt="EazyPayouts Logo" />
      </LogoContainer>
      <NavItem to="/loads">Loads</NavItem>
      <NavItem to="/statements">Statements</NavItem>
      <NavItem to="/transactions">Transactions</NavItem>
      <NavItem to="/logout">Logout</NavItem>
    </SidebarContainer>
  );
};

export default Sidebar;
