import { useLocation } from 'react-router-dom'
import style from './productPage.module.css'

const ProductPage = () => {
  const product = useLocation().state
  return (
    <div>
      <h1>{product.title}</h1>
      <h4>{product.description}</h4>
    </div>
  )
}

export default ProductPage