import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

const fakeStoreProductsApiUrl = 'https://fakestoreapi.com/products/';

function App() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch(fakeStoreProductsApiUrl)
      .then(response => response.json())
      .then(list => setItems(list))
      .catch(error => console.error(error))
  })

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
        <Outlet context={items}/>
      </div>
    </>
  )
}

export default App;
