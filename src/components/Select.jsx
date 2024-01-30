import { forwardRef } from 'react';

const Select = forwardRef(
  (
    {
      children,
      label,
      options = [{ id: 1, name: 'bKash' }],
      placeholder = 'Select an option',
      wrapperClass = '',
      errorMessage,
      isColorSelect = false,
      optionStyle = {},
      ...rest
    },
    ref
  ) => {
    return (
      <label className={wrapperClass}>
        {label && <span className='text-gray-500 font-semibold'>{label}</span>}
        <select
          ref={ref}
          className='appearance-none block w-full border bg-transparent outline-none focus:border-teal-500 rounded p-2 text-gray-600'
          {...rest}
        >
          <option value=''>{placeholder}</option>
          {!isColorSelect
            ? options?.map((option) => (
                <option key={option.id} value={option.id} style={optionStyle}>
                  {option?.name}
                </option>
              ))
            : options?.map((option) => (
                <option
                  key={option.id}
                  value={option.id}
                  style={{ backgroundColor: option.id, height: '3rem !important', }}
                ></option>
              ))}
        </select>
        {errorMessage && <span className='text-red-400'>{errorMessage}</span>}
      </label>
    );
  }
);

export default Select;
