import React, { useState } from 'react';
import { useAuthContext } from '../providers/AuthProvider';

import Icon from '../components/Icon';
import Modal from '../components/Modal';

import IncomeExpense from '../components/home/IncomeExpense';
import Records from '../components/home/Records';
import AddRecordForm from '../components/home/AddRecordForm';
import AccountList from '../components/home/AccountList';

const Home = () => {
  const [modal, setModal] = useState(false);

  const auth = useAuthContext();

  const handleOpenModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div className='relative pb-28'>
      <AccountList />
      <IncomeExpense />
      <Records />
      <Icon
        name='plus'
        wrapperClass='fixed bottom-3 right-3 cursor-pointer shadow-lg  rounded-full bg-white'
        onClick={handleOpenModal}
      />

      {/* Add Record Modal */}
      <Modal open={modal}>
        <Modal.header>ADD RECORD</Modal.header>
        <Modal.body>
          <AddRecordForm handleClose={handleCloseModal} />
        </Modal.body>
      </Modal>
    </div>
  );
};

export default Home;
