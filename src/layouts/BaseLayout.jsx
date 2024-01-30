import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const BaseLayout = ({ children }) => {
  return (
    <div className='bg-white-200'>
      <Header />
      <div className='px-3'>
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
