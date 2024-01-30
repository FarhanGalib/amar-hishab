import ReactDom from 'react-dom';

export const header = ({ children }) => {
  return (
    <div className='border text-center font-bold text-gray-500 py-1'>
      {children}
    </div>
  );
};

export const body = ({ children }) => {
  return <div className='px-3 py-3'>{children}</div>;
};

export const footer = ({ children }) => {
  return <div className='px-3 py-3 flex justify-end gap-3'>{children}</div>;
};

const Modal = ({ children, open = false }) => {
  if (!open) return;

  return ReactDom.createPortal(
    <div
      className={`fixed inset-0 bg-black bg-opacity-75  flex justify-center items-center transition-opacity duration-900`}
    >
      <div className='bg-white rounded overflow-hidden shadow-md w-11/12 md:w-4/5 lg:w-1/2 '>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.header = header;
Modal.body = body;
Modal.footer = footer;

export default Modal;
