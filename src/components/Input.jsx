import { forwardRef } from 'react';

const Input = forwardRef(
  ({ label, type = 'text', wrapperClass = '', errorMessage, ...rest }, ref) => {
    return (
      <label className={wrapperClass}>
        {label && <span className='text-gray-500 font-semibold'>{label}</span>}
        <input
          ref={ref}
          className='block w-full text-gray-600 border outline-none focus:border-teal-500 rounded p-2'
          type={type}
          {...rest}
        />
        {errorMessage && <span className='text-red-400'>{errorMessage}</span>}
      </label>
    );
  }
);

export default Input;
