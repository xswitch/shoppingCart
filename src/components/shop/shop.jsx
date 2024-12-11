import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProductCard from "./productCard/productCard"
import useFetch from "../../hooks/useFetch"

const Shop = () => {
  const {products, loading, error} = useFetch('https://fakestoreapi.com/products/')

  return (
    <div>
      <h1>This is the shop</h1>
      {loading && <h1>Loading...</h1>}
      {products && <p>{products}</p>}
    </div>
  )
}

export default Shop