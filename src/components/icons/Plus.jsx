const Plus = ({ wrapperClass = '', ...rest }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='#14b8a6'
      x='0px'
      y='0px'
      width='70'
      height='70'
      viewBox='0 0 50 50'
      className={wrapperClass}
      {...rest}
    >
      <path d='M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z'></path>
    </svg>
  );
};

export default Plus;
