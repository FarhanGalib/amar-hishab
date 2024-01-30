import React from 'react';
import Card from './Card';



const AccountCard = ({
  color = '',
  children,
  wrapperClass = '',
  amount = 0,
  name = 'Accoun Name',
}) => {
  return (
    <Card
      wrapperClass={`w-100 rounded-md  text-white font-bold text-center ${color} ${wrapperClass}`}
    >
      <p className='text-xs'>{name}</p>
      <p className='text-xs'>TK. {amount}</p>
    </Card>
  );
};

export default AccountCard;
