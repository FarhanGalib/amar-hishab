import React, { useState } from 'react';
import Icon from './Icon';
import Sidebar from './Sidebar';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleOpenMenuModal = () => {
    console.log('ksjhfjkh');
    setMenu(true);
  };
  const handleCloseMenuModal = () => {
    setMenu(false);
  };
  return (
    <div className='w-100 bg-teal-500 font-bold py-3 px-3 text-white flex justify-between'>
      <p>HISHAB KITAB</p>
      <Icon
        name='menu'
        wrapperClass='text-white'
        onClick={handleOpenMenuModal}
      />
      <Sidebar open={menu} handleClose={handleCloseMenuModal}>
        <div className='py-3 px-5 flex gap-3 items-center border-b'>
          <div className='w-20 h-20 bg-green-200 rounded-full' />
          <div className='max-w-60 min-w-40 break-words'>
            <p className='font-bold text-lg'>Farhan Galib</p>
            <p className='font-thin '>farhan.exabyting@bkash.com</p>
          </div>
        </div>
        <ul className='pt-5 px-5'>
          <li className='w-full flex items-center gap-3 cursor-pointer hover:text-teal-500'>
            <Icon name='exit' color='text-teal-500' /> Categories
          </li>
          <li className='w-full flex items-center gap-3 cursor-pointer hover:text-teal-500'>
            <Icon name='exit' color='text-teal-500' /> Add Account
          </li>
          <li className='w-full flex items-center gap-3 cursor-pointer hover:text-teal-500'>
            <Icon name='exit' color='text-teal-500' /> All Account
          </li>
          <li className='w-full flex items-center gap-3 cursor-pointer hover:text-teal-500'>
            <Icon name='exit' color='text-teal-500' /> Add Record
          </li>
          <li className='w-full flex items-center gap-3 cursor-pointer hover:text-teal-500'>
            <Icon name='exit' color='text-teal-500' /> All Records
          </li>
          <li className='w-full flex items-center gap-3 cursor-pointer hover:text-teal-500'>
            <Icon name='exit' color='text-teal-500' /> Log Out
          </li>
        </ul>
      </Sidebar>
    </div>
  );
};

export default Header;
