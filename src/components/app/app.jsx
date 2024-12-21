import { Outlet } from "react-router-dom";
import Header from "./header/header";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";

const App = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products/"
  );
  const [cart, setCart] = useState({});

  const addToCart = (id) => {
    if (`${id}` in cart) {
      setCart({
        ...cart,
        [id]: cart[id] + 1,
      })
    } else {
      setCart({
        ...cart,
        [id]: 1,
      })
    }
  };

  const deleteFromCart = (id) => {
    console.log(id)
    if (`${id}` in cart) {
      const cartCopy = {...cart}
      delete cartCopy[id]
      setCart(cartCopy)
    }
  }

  return (
    <>
      <Header cart={cart} products={data} deleteFromCart={deleteFromCart} />
      <Outlet context={[data, loading, error, addToCart]} />
    </>
  );
};

export default App;
