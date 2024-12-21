import { useState } from "react";
import style from "./categories.module.css";

export default function Categories({ products, changeCategory, currentCategory }) {

  const categories = new Set(
    products.map(
      (product) =>
        product.category.split("")[0].toUpperCase() + product.category.slice(1)
    )
  );
  return (
    <div className={style.container}>
      <h2>Categories</h2>
      {[...categories].map((category) => (
        <button
          className={currentCategory === category ? style.active : style.inActive}
          onClick={() => changeCategory(category)}
          key={crypto.randomUUID()}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
