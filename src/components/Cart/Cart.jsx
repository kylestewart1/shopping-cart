import { useOutletContext } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const { items, cart, handleEditButton, adjustItemQuantity, removeFromCart } = useOutletContext();

  const cartView = cart.map(cartItem => {
    const data = items.find(item => item.id === cartItem.id);
    return (
      <li key={cartItem.id}>
        <h4>{data.title}</h4>
        <img className="cart-item-image" src={data.image} />
        {cartItem.editing ? 
          <label>Quantity: 
            <input type="number" 
                   value={cartItem.quantity}
                   min={0}
                   onChange={(e) => adjustItemQuantity(cartItem.id, Number(e.target.value))} />
          </label>
          : <p>Quantity: {cartItem.quantity}</p>
        }
        <button onClick={() => handleEditButton(cartItem.id)}>Edit</button>
        <button onClick={() => removeFromCart(cartItem.id)}>Remove</button>
      </li>
    )
  })
  return (
    <div className="cart">
      <ul>
        {cartView}
      </ul>
    </div>
  )
}