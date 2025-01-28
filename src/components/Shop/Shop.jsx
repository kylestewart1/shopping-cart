import { useOutletContext } from "react-router-dom";
import Item from "../Item/Item";
import "./Shop.css";


export default function Shop() {
  const items = useOutletContext();

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