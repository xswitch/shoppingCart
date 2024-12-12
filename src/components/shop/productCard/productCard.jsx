import { Link } from "react-router-dom";
import style from "./productCard.module.css";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className={style.card}>
      <div className={style.imageContainer}>
        <img src={product.image} alt="" srcset="" className={style.image} />
      </div>
      <h4>{product.title}</h4>
      <p>
        {product.description.slice(0, 75) +
          (product.description.length > 75 && "... ")}
        {product.description.length > 75 && (
          <Link to={`${product.id}`} state={product}>Show More</Link>
        )}
      </p>
    </div>
  );
};

export default ProductCard;
