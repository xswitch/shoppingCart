import style from "./cartItem.module.css";
import formatPrice from "../../../utils/formatPrice";
import { useState } from "react";
import { Check } from "lucide-react";

export default function CartItem({ product, deleteFromCart }) {
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    if (editing) {
      setEditing(false);
    } else {
      setEditing(true);
    }
  };

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
        <div className={style.amountContainer}>
          <p className={style.amount}>Quantity:</p>
          <div>
            {!editing ? (
              <span className={style.amountButton} onClick={() => handleClick()}>{product.amount}</span>
            ) : (
              <div className={style.amountEdit}>
                <input type="number" name="number" value={product.amount} />
                <Check color="green" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
