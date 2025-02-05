import { useState } from "react";
import "./Item.css";
import PropTypes from "prop-types";

function Item({ data, addToCartHandler }) {
  const [quantityToAdd, setQuantityToAdd] = useState(1);
  
  return (
    <div className="item">
      <img src={data.image} />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <form>
        <label>
          Quantity:    
          <input type="number" 
                 value={quantityToAdd}
                 min={0}
                 onChange={(e) => setQuantityToAdd(Number(e.target.value))}/>
        </label>
        <button className="add-to-cart-btn" onClick={(event) => addToCartHandler(event, data.id, quantityToAdd)}>Add to Cart</button>
      </form>
    </div>
  )
}

Item.propTypes = {
  data: PropTypes.object,
  addToCartHandler: PropTypes.func
}

export default Item;