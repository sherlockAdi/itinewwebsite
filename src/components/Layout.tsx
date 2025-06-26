import React from 'react';
import MainHeader from './MainHeader';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => (
  <>
    <MainHeader />
    <Outlet />
    <Footer />
  </>
);

export default Layout; 