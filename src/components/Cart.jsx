import { useOutletContext } from "react-router-dom"

export default function Cart() {
  const { items, cart, handleEditButton, adjustItemQuantity } = useOutletContext();

  const cartView = cart.map(cartItem => {
    const data = items.find(item => item.id === cartItem.id);
    return (
      <li key={cartItem.id}>
        <h4>{data.title}</h4>
        {cartItem.editing ? 
          <label>Quantity: 
            <input type="number" 
                   value={cartItem.quantity}
                   min={0}
                   onChange={(e) => adjustItemQuantity(cartItem.id, Number(e.target.value))} />
          </label>
          : <p>Quantity: {cartItem.quantity}</p>
        }
        <button onClick={() => {handleEditButton(cartItem.id)}}>Edit</button>
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