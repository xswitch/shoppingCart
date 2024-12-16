import { useState } from 'react'
import style from './cart.module.css'
import { ShoppingCart } from 'lucide-react'

const Cart = ({cart, products}) => {
  const [active, setActive] = useState(false)
  console.log(cart)

  const productsInCart = Object.keys(cart).map((key) => {
    let product = products.filter((entry) => `${entry.id}` === key)
    product = product[0];
    product.amount = cart[key];
    return {
      product,
    }
  })
  console.log(productsInCart)

  const handleClick = () => {
    setActive((active) => active ? false : true)
    console.table(cart);
    console.log(products)
  }
  return (
    <div className={style.container}>
      <ShoppingCart color={active ? 'orange' : 'white'} size={24} className={style.cart} onClick={handleClick}/>
    </div>
  )
}

export default Cart