import { forwardRef } from 'react';

const ColorSelect = forwardRef(
  (
    {
      children,
      label,
      options = [{ id: 1, name: 'no options' }],
      placeholder = 'Select an option',
      wrapperClass = '',
      errorMessage,
      selectedColor = '',
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
          style={{ backgroundColor: selectedColor }}
          {...rest}
        >
          <option value=''>{placeholder}</option>
          {options?.map((option) => (
            <option
              key={option.id}
              value={option.id}
              style={{
                backgroundColor: option.id,
              }}
            />
          ))}
        </select>
        {errorMessage && <span className='text-red-400'>{errorMessage}</span>}
      </label>
    );
  }
);

export default ColorSelect;
