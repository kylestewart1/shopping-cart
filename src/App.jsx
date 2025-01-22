import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">View Cart</Link>
          </li>
        </ul>
      </nav>
      <div id='content'>
        <Outlet />
      </div>
    </>
  )
}

export default App;
