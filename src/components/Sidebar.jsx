import ReactDom from 'react-dom';

export const header = ({ children }) => {
  return (
    <div className='border font-bold text-gray-500 py-1'>
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

const Sidebar = ({ children, open = false }) => {
  if (!open) return;

  return ReactDom.createPortal(
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex justify-end transition-all duration-300`}
    >
      <div className='bg-white rounded overflow-hidden shadow-md w-70'>
        {children}
      </div>
    </div>,
    document.getElementById('sidebar-root')
  );
};

Sidebar.header = header;
Sidebar.body = body;
Sidebar.footer = footer;

export default Sidebar;
