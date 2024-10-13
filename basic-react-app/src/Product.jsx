import "./Product.css";
export default function Product({title, price, features}) {
const title2 = title
  return (
    <div className="product">
      <h4>{title2}</h4>
      {/* <h4>{price}</h4> */}
      <ul>
        {/* {features.map((features, index) => (
          <li>{features}</li>
        ))} */}
      </ul>
    </div>
  );
}
