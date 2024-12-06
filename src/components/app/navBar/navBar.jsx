import { Link } from 'react-router-dom'
import style from './navBar.module.css'

const Navbar = () => {
  return (
    <div className={style.container}>
      <Link to='/' className={style.navItem}>Home</Link>
      <Link to='/shop' className={style.navItem}>Shop</Link>
      <Link to='/about' className={style.navItem}>About</Link>
    </div>
  )
}

export default Navbar