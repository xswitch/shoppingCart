import { useState } from "react";
import style from "./cart.module.css";
import { ShoppingCart } from "lucide-react";

const Cart = ({ cart, products }) => {
  const [active, setActive] = useState(false);
  const [previousItemAmount, setPreviousItemAmount] = useState(0)

  const productsInCart = Object.keys(cart).map((key) => {
    let product = products.filter((entry) => `${entry.id}` === key);
    product = product[0];
    return {
      title: product.title,
      price: product.price,
      amount: cart[key],
    };
  });

  const itemAmount = productsInCart.reduce((prev, cur) => cur.amount + prev, 0)

  const handleClick = () => {
    setActive((active) => {
      if (active) {
        return false;
      } else {
        setPreviousItemAmount(itemAmount)
        return true;
      }
    });
  };
  return (
    <div className={style.container}>
      <ShoppingCart
        color={active ? "orange" : "white"}
        size={24}
        className={style.cart}
        onClick={handleClick}
      />
      {itemAmount > previousItemAmount && <div className={style.newItems}>{itemAmount - previousItemAmount}</div>}
    </div>
  );
};

export default Cart;
