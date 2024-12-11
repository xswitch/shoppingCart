import style from './productCard.module.css'

const ProductCard = ({product}) => {
  console.log(product)
  return (
    <div className={style.card}>
      <img src={product.image} alt="" srcset="" className={style.image}/>
    </div>
  )
}

export default ProductCard