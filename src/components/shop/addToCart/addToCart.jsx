import style from "./addToCart.module.css";

export default function AddToCart({addToCart, productId}) {
  return (
    <>
      <button onClick={() => addToCart(productId)} className={style.button}><span>Add To Cart</span></button>
    </>
  );
}
