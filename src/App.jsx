import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="navBar">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">View Cart</Link>
        </nav>
      </div>
      <div id='content'>
        <Outlet />
      </div>
    </>
  )
}

export default App;
