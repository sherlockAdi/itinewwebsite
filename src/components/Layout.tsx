import React from 'react';
import MainHeader from './MainHeader';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <MainHeader />
    <Outlet />
  </>
);

export default Layout; 