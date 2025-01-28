import "./Item.css";
import PropTypes from "prop-types";

function Item({ data, addToCartHandler }) {
  return (
    <div className="item">
      <img src={data.image} />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <button onClick={() => addToCartHandler(data.id)}>Add to Cart</button>
    </div>
  )
}

Item.propTypes = {
  data: PropTypes.object,
  addToCartHandler: PropTypes.func
}

export default Item;