import React from 'react'
import Navigation from '../Navigation';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default RootLayout

