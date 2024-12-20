import Categories from "./categories/categories";
import ProductCard from "./productCard/productCard";
import SearchBar from "./searchBar/searchBar";
import style from "./shop.module.css";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const [data, loading, error, addToCart] = useOutletContext();
  if (error) return <div>{error}</div>;
  return (
    <div className={style.container}>
      <div className={style.products}>
        {loading && <h1>Loading...</h1>}
        {data &&
          data.map((product) => {
            return <ProductCard key={crypto.randomUUID()} product={product} addToCart={addToCart} />;
          })}
      </div>
      <div className={style.sidebar}>
        <SearchBar />
        {loading ? <h4>Loading...</h4> : <Categories products={data} />}
      </div>
    </div>
  );
};

export default Shop;
