import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

const fakeStoreProductsApiUrl = 'https://fakestoreapi.com/products/';

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    fetch(fakeStoreProductsApiUrl)
      .then(response => response.json())
      .then(list => setItems(list))
      .catch(error => console.error(error))
  })

  function addToCart(itemID) {
    const item = cart.find(itm => itm.id === itemID);
    if (item !== undefined) {
      setCart([
        ...cart.filter(itm => itm.id !== itemID),
        {
          id: itemID,
          quantity: item.quantity + 1
        }
      ])
    } else {
      setCart([
        ...cart,
        {
          id: itemID,
          quantity: 1
        }
      ])
    }
  }

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
        <Outlet context={{
          items: items,
          cart: cart,
          addToCart: addToCart
          }}/>
      </div>
    </>
  )
}

export default App;
