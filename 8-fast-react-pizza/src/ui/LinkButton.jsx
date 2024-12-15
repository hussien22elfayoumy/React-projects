import { Link } from 'react-router-dom';

function LinkButton({ children, to, onClick }) {
  return (
    <Link
      className='text-sm text-blue-500 hover:text-blue-600 hover:underline'
      to={to}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
