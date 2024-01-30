const Button = ({ children, warperClass = '' }) => {
  return <button className={`border ${warperClass}`}>{children}</button>;
};

export default Button;
