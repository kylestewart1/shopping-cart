import { useEffect, useState } from "react"
import Item from "./Item";

const fakeStoreProductsApiUrl = 'https://fakestoreapi.com/products/';

export default function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(fakeStoreProductsApiUrl)
      .then(response => response.json())
      .then(list => setItems(list))
      .catch(error => console.error(error))
  })

  const itemCards = items.map(item => {
    return (
      <Item key={item.id} data={item} />
    )
  })

  return (
    <div className="shop">
      <h2>&apos;Murica</h2>
      <div className="shop-items-container">
        {itemCards}
      </div>
    </div>
  )
}