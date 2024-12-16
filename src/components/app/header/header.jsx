import Navbar from "../navBar/navBar"
import style from './header.module.css'
import Cart from "../cart/cart"

const Header = ({cart, products}) => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>React Shop</h1>
      <Navbar />
      <Cart cart={cart} products={products}/>
    </div>
  )
}

export default Header