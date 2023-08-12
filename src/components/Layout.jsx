import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { NavBar } from './NavBar';

export const Layout = () => {
  return (
    <LayoutWrapper>
      <NavBar />
      {/* <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/collection">CollectionNavBar</NavLink>
      </nav> */}

      <WrapperOutlet>
        <Outlet />
      </WrapperOutlet>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
`;
const WrapperOutlet = styled.div`
  padding: 20px;
  padding-left: 290px;
`;
