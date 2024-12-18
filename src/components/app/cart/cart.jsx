import { useEffect, useRef, useState } from "react";
import style from "./cart.module.css";
import { ShoppingCart } from "lucide-react";
import CartItem from "../cartItem/cartItem";

const Cart = ({ cart, products }) => {
  const [active, setActive] = useState(false);
  const [previousItemAmount, setPreviousItemAmount] = useState(0);
  const cartRef = useRef(null);

  useEffect(() => {
    const outsideClick = (event) => {
      if (
        active &&
        !cartRef.current.contains(event.target) &&
        cartRef.current
      ) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", outsideClick);
    return () => {
      document.removeEventListener("mousedown", outsideClick);
    };
  }, [active]);

  const productsInCart = Object.keys(cart).map((key) => {
    let product = products.filter((entry) => `${entry.id}` === key);
    product = product[0];
    return {
      title: product.title,
      price: product.price,
      amount: cart[key],
      image: product.image,
    };
  });

  const itemAmount = productsInCart.reduce((prev, cur) => cur.amount + prev, 0);

  const handleClick = () => {
    if (!active) {
      setActive(true);
      setPreviousItemAmount(itemAmount);
    }
  };

  return (
    <div className={style.container}>
      <ShoppingCart
        color={active ? "orange" : "white"}
        size={24}
        className={style.cart}
        onClick={() => handleClick()}
      />
      {itemAmount > previousItemAmount && (
        <div className={style.newItems}>{itemAmount - previousItemAmount}</div>
      )}
      {active && (
        <div className={style.cartContainer} ref={cartRef}>
          {productsInCart.length > 0 ? (
            productsInCart.map((product) => (
              <CartItem key={crypto.randomUUID()} product={product} />
            ))
          ) : (
            <div className={style.empty}>
              <h4>Empty</h4>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
