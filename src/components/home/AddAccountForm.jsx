import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Input';
import Select from '../Select';
import { colors } from '../../utils/colors';
import ColorSelect from '../ColorSelect';

const AddAccountForm = ({ handleClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label='Account Name'
        placeholder='Your account Name'
        wrapperClass='mb-2'
        {...register('account', {
          required: 'Account Name field is required',
        })}
      />
      {errors.account && (
        <p className='text-red-400'>{errors.account.message}</p>
      )}

      <Input
        type='number'
        label='Initial Amount'
        placeholder='Amount'
        wrapperClass='mb-2'
        {...register('initial_amount', {
          required: 'Initial Amount field is required',
          min: 0,
        })}
      />
      {errors.initial_amount && (
        <p className='text-red-400'>{errors.initial_amount.message}</p>
      )}
      {errors?.initial_amount?.type === 'min' && (
        <p className='text-red-400'>Amount can not be negative</p>
      )}

      <ColorSelect
        label='Color'
        placeholder='Pick a color'
        options={colors}
        selectedColor={watch('color')}
        {...register('color', {
          required: 'Color field is required',
        })}
      />
      {errors.color && <p className='text-red-400'>{errors.color.message}</p>}

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

export default AddAccountForm;
