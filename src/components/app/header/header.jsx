import Navbar from "../navBar/navBar"
import style from './header.module.css'
import Cart from "../cart/cart"

const Header = () => {
  return (
    <div className={style.container}>
      <h1>React Shop</h1>
      <Navbar />
      <Cart />
    </div>
  )
}

export default Header