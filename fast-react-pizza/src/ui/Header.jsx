import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header>
      <Link to='/'>Fase React Pizzs Co.</Link>
      <SearchOrder />
      <p>Hussien</p>
    </header>
  );
}

export default Header;
