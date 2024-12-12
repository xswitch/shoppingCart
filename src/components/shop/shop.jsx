import ProductCard from "./productCard/productCard";
import style from "./shop.module.css";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const [data, loading, error] = useOutletContext();
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
      <div>
        <div>Search</div>
        <div>Categories</div>
      </div>
    </div>
  );
};

export default Shop;
