const Card = ({ children, wrapperClass = '', ...rest }) => {
  return (
    <div className={`rounded-md p-1 ${wrapperClass}`} {...rest}>
      {children}
    </div>
  );
};

export default Card;
