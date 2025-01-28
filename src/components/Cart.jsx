import { useOutletContext } from "react-router-dom"

export default function Cart() {
  const { items, cart } = useOutletContext();

  const cartView = cart.map(cartItem => {
    const data = items.find(item => item.id === cartItem.id);
    return (
      <li key={cartItem.id}>
        <h4>{data.title}</h4>
        <p>Quantity: {cartItem.quantity}</p>
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