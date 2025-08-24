import React from 'react'
import Navigation from '../Navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const RootLayout = () => {
  return (
    <div>
      <Navigation />
      <div className='mx-32'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout

