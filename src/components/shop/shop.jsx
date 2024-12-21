import { useEffect, useState } from "react";
import Categories from "./categories/categories";
import ProductCard from "./productCard/productCard";
import SearchBar from "./searchBar/searchBar";
import style from "./shop.module.css";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const [data, loading, error, addToCart] = useOutletContext();
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    
    setFilteredProducts(
      data.filter((product) => String(product.title).toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, data]);

  const changeSearch = (input) => {
    console.log(input.target.value);
    if (input.target.value === "") {
      setSearch("");
    } else {
      setSearch(input.target.value);
    }
  };

  if (error) return <div>{error}</div>;
  return (
    <div className={style.container}>
      <div className={style.products}>
        {loading && <h1>Loading...</h1>}
        {filteredProducts &&
          filteredProducts.map((product) => {
            return (
              <ProductCard
                key={crypto.randomUUID()}
                product={product}
                addToCart={addToCart}
              />
            );
          })}
      </div>
      <div className={style.sidebar}>
        <SearchBar changeSearch={changeSearch} />
        {loading ? <h4>Loading...</h4> : <Categories products={data} />}
      </div>
    </div>
  );
};

export default Shop;
