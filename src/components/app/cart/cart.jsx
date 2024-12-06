import style from './cart.module.css'
import { ShoppingCart } from 'lucide-react'

const Cart = () => {
  return (
    <div className={style.container}>
      <ShoppingCart color='white' size={24} className={style.cart} />
    </div>
  )
}

export default Cart