import ProductCard from "./productCard/productCard";
import useFetch from "../../hooks/useFetch";
import style from "./shop.module.css";

const Shop = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products/"
  );
  if (error) return <div>{error}</div>;
  return (
    <div className={style.container}>
      <div className={style.products}>
        {loading && <h1>Loading...</h1>}
        {data &&
          data.map((product) => {
            return <ProductCard key={crypto.randomUUID()} product={product} />;
          })}
      </div>
    </div>
  );
};

export default Shop;
