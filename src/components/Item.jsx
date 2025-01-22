export default function Item({ data, addToCartHandler }) {
  return (
    <div className="item">
      <h3>{data.title}</h3>
    </div>
  )
}