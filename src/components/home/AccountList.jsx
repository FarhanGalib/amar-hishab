import React, { useState } from 'react';
import Section from '../Section';
import AccountCard from '../AccountCard';
import Card from '../Card';
import Modal from '../Modal';
import AddAccountForm from './AddAccountForm';
import { useNavigate } from 'react-router';

const AccountList = () => {
  const [addAccountModal, setAddAccountModal] = useState(false);
  const navigate = useNavigate();

  const openAddAccountModal = () => {
    console.log('modal will open');
    setAddAccountModal(true);
  };

  const closeAddAccountModal = () => {
    setAddAccountModal(false);
  };
  return (
    <Section title={`Accounts`} wrapperClass={`py-0`}>
      <div className='grid grid-cols-2 gap-1'>
        <AccountCard color={`bg-red-500`} name={`CASH`} amount={`100000`} />
        <AccountCard color={`bg-green-500`} name={`CASH`} amount={`100000`} />
        <AccountCard color={`bg-blue-500`} name={`CASH`} amount={`100000`} />
        {/* <AccountCard
            color={`bg-yellow-50 text-yellow-500 border border-yellow-200`}
            name={`CASH`}
            ammount={`100000`}
          /> */}
        <Card
          wrapperClass='border border-teal-500 text-teal-500 text-center font-bold py-2 cursor-pointer'
          onClick={openAddAccountModal}
        >
          + Add Account
        </Card>
      </div>
      <div className='mt-2 text-end'>
        <button
          className='text-blue-500 underline'
          onClick={() => navigate('/accounts')}
        >
          Show all accounts
        </button>
      </div>
      <Modal open={addAccountModal}>
        <Modal.header>Add Account</Modal.header>
        <Modal.body>
          <AddAccountForm handleClose={closeAddAccountModal} />
        </Modal.body>
      </Modal>
    </Section>
  );
};

export default AccountList;
