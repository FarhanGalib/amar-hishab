import Plus from './icons/Plus';

const Icon = ({ name, wrapperClass = '', ...rest }) => {
  switch (name) {
    case 'plus':
      return (
        <div className={wrapperClass} {...rest}>
          <Plus name='plus' wrapperClass={''} />
        </div>
      );
    default:
      return null;
  }
};

export default Icon;
