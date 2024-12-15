import { Link, useLocation } from 'react-router-dom'
import style from './productPage.module.css'

const ProductPage = () => {
  const product = useLocation().state
  const previousUrl = useLocation()
  console.log(previousUrl)
  return (
    <div>
      <h1>{product.title}</h1>
      <h4>{product.description}</h4>
      <Link to='/shop'>Back</Link>
    </div>
  )
}

export default ProductPage