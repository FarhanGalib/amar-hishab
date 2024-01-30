import React from 'react';
import Section from '../Section';
import Card from '../Card';

const Records = () => {
  const records = [
    { type: 'INCOME' },
    { type: 'EXPENSE' },
    { type: 'EXPENSE' },
    { type: 'INCOME' },
    { type: 'EXPENSE' },
    { type: 'INCOME' },
    { type: 'EXPENSE' },
    { type: 'EXPENSE' },
    { type: 'INCOME' },
    { type: 'EXPENSE' },
    { type: 'INCOME' },
    { type: 'EXPENSE' },
    { type: 'EXPENSE' },
    { type: 'INCOME' },
    { type: 'EXPENSE' },
  ];
  return (
    <Section title={'Records'} contentClass='w-100'>
      {records.map((record, index) => (
        <Card
          key={index}
          wrapperClass='text-gray-600 flex justify-between items-center gap-x-2 border mb-1'
        >
          <div
            onClick={() => console.log('hello')}
            className='flex items-center w-3/4'
          >
            <div>Icon</div>
            <div className='ml-2'>
              <p className='font-bold'>Title</p>
              <p className='text-sm'>
                Note will be here Note will be here here Note will be here{' '}
              </p>
            </div>
          </div>
          <p
            className={`font-bold  w-1/4 ${
              record.type === 'EXPENSE' ? 'text-red-500' : 'text-green-500'
            }`}
          >
            {record.type === 'EXPENSE' ? '-' : '+'} TK. 120
          </p>
        </Card>
      ))}
    </Section>
  );
};

export default Records;
