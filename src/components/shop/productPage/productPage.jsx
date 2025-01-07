import { Link, useLocation, useOutletContext } from "react-router-dom";
import style from "./productPage.module.css";
import formatPrice from "../../../utils/formatPrice";
import AddToCart from "../addToCart/addToCart";

const ProductPage = () => {
  const product = useLocation().state;
  const previousUrl = useLocation();
  const [data, loading, error, addToCart] = useOutletContext();
  console.log(product);
  console.log(previousUrl);
  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.left}>
          <img className={style.image} src={product.image} alt="" />
          <Link className={style.link} to="/shop">
            Back
          </Link>
        </div>
        <div className={style.right}>
          <h1>{product.title}</h1>
          <h4>{product.description}</h4>
          <div className={style.rightFooter}>
            <div className={style.priceContainer}>
              <p className={style.priceText}>Price</p>
              <p className={style.price}>${formatPrice(product.price)}</p>
            </div>
            <AddToCart productId={product.id} addToCart={addToCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
