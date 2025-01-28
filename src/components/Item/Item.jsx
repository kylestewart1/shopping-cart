import "./Item.css";

export default function Item({ data, addToCartHandler }) {
  return (
    <div className="item">
      <img src={data.image} />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <button onClick={addToCartHandler}>Add to Cart</button>
    </div>
  )
}