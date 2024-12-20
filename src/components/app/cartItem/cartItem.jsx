import style from "./cartItem.module.css";
import formatPrice from "../../../utils/formatPrice"

export default function CartItem({ product, deleteFromCart }) {
  return (
    <div className={style.cartItem}>
      <div className={style.imageContainer}>
        <img src={product.image} className={style.image} />
      </div>
      <div className={style.infoContainer}>
        <div>
          <h4 className={style.title}>{product.title}</h4>
          <button onClick={() => deleteFromCart(product.id)}>x</button>
        </div>
        <p className={style.price}>${formatPrice(product.price)}</p>
        <p className={style.amount}>Quantity: <span>{product.amount}</span></p>
      </div>
    </div>
  );
}
