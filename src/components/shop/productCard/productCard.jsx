import { Link } from "react-router-dom";
import style from "./productCard.module.css";
import formatPrice from "../../../utils/formatPrice";
import AddToCart from "../addToCart/addToCart";

const ProductCard = ({ product, addToCart }) => {
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
          <Link to={`${product.id}`} state={product}>
            Show More
          </Link>
        )}
      </p>
      <div className={style.footer}>
        <div className={style.priceContainer}>
          <p className={style.priceTitle}>Price</p>
          <p className={style.price}>${formatPrice(product.price)}</p>
        </div>
        <AddToCart productId={product.id} addToCart={addToCart} />
      </div>
    </div>
  );
};

export default ProductCard;
