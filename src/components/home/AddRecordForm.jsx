import React from 'react';
import Select from '../Select';
import Input from '../Input';
import { useForm } from 'react-hook-form';

const AddRecordForm = ({ handleClose }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type='number'
        label='Amount'
        placeholder='Total Amount'
        wrapperClass='mb-2'
        {...register('amount', {
          required: 'Amount field is required',
          min: 1,
        })}
      />
      {errors.amount && <p className='text-red-400'>{errors.amount.message}</p>}
      {errors?.amount?.type === 'min' && (
        <p className='text-red-400'>Amount can not be zero or negative</p>
      )}
      <Select
        label='Account'
        placeholder='Select Account'
        wrapperClass='!mt-2'
        options={[
          { id: 1, name: 'EBL' },
          { id: 2, name: 'bKash' },
          { id: 3, name: 'Cash' },
        ]}
        {...register('account', {
          required: 'Account field is required',
        })}
      />
      {errors.account && (
        <p className='text-red-400'>{errors.account.message}</p>
      )}
      <Select
        label='Income/Expense'
        placeholder='Select record type'
        options={[
          { id: 1, name: 'INCOME' },
          { id: 2, name: 'EXPENSE' },
        ]}
        {...register('type', {
          required: 'Income/Expense field is required',
        })}
      />
      {errors.type && <p className='text-red-400'>{errors.type.message}</p>}
      <Select
        label='Category'
        placeholder='Select Category'
        {...register('category', {
          required: 'Category field is required',
        })}
      />
      {errors.category && (
        <p className='text-red-400'>{errors.category.message}</p>
      )}
      <div className='flex w-full gap-1'>
        <div className='grow'>
          <Input
            type='date'
            label='Date'
            placeholder='Select Date'
            {...register('date', { required: 'Date field is required' })}
          />
          {errors.date && <p className='text-red-400'>{errors.date.message}</p>}
        </div>
        <div className='grow'>
          <Input
            type='time'
            label=' Time'
            placeholder='Select Date'
            {...register('time', { required: 'Time field is required' })}
          />
          {errors.time && <p className='text-red-400'>{errors.time.message}</p>}
        </div>
      </div>
      <Input label='Note' placeholder='Any note...' {...register('note')} />

      <div className='py-3 mt-3 flex justify-end gap-3'>
        <button
          onClick={handleClose}
          className='border px-3 py-2 w-20 rounded-lg border-gray-400  text-gray-400 font-bold'
        >
          Close
        </button>
        <button
          type='submit'
          className='border px-3 py-2 w-20 rounded-lg  bg-teal-500 text-white font-bold'
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AddRecordForm;
