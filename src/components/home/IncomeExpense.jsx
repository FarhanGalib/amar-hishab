import React from 'react';
import Section from '../Section';
import Card from '../Card';

const IncomeExpense = () => {
  return (
    <Section
      title={'Current Month Income/Expense'}
      wrapperClass='!rounded'
      contentClass='w-100 flex flex-row text-center font-bold text-sm'
    >
      <Card wrapperClass='bg-green-200 border border-green-500 text-green-700 grow !rounded-r-none !border-0 py-2'>
        <p className=''>INCOME</p>
        <p className=''>TK. 50000</p>
      </Card>
      <Card wrapperClass='bg-red-200 border border-red-500 text-red-600 grow !rounded-l-none !border-0 py-2'>
        <p className=''>EXPENSE</p>
        <p className=''>TK. 15000</p>
      </Card>
    </Section>
  );
};

export default IncomeExpense;