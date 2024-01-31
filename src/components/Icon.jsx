import Close from './icons/Close';
import Exit from './icons/Exit';
import Hamburger from './icons/Hamburger';
import Plus from './icons/Plus';

const Icon = ({ name, wrapperClass = '', ...rest }) => {
  switch (name) {
    case 'plus':
      return (
        <div className={wrapperClass} {...rest}>
          <Plus name='plus' wrapperClass={''} />
        </div>
      );
    case 'menu':
      return (
        <div className={wrapperClass} {...rest}>
          <Hamburger name='menu' wrapperClass={''} />
        </div>
      );

    case 'close':
      return (
        <div className={wrapperClass} {...rest}>
          <Close name='close' wrapperClass={''} />
        </div>
      );
    case 'exit':
      return (
        <div className={wrapperClass} {...rest}>
          <Exit wrapperClass={''} />
        </div>
      );
    default:
      return null;
  }
};

export default Icon;
