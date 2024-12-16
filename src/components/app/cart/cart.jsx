import { useState } from 'react'
import style from './cart.module.css'
import { ShoppingCart } from 'lucide-react'

const Cart = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive((active) => active ? false : true)
  }
  return (
    <div className={style.container}>
      <ShoppingCart color={active ? 'orange' : 'white'} size={24} className={style.cart} onClick={handleClick}/>
    </div>
  )
}

export default Cart