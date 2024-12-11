import { Link, useLocation } from 'react-router-dom'
import style from './navBar.module.css'

const Navbar = () => {
  const current = useLocation()
  console.log(current.pathname)
  return (
    <div className={style.container}>
      <Link to='/' className={`${style.navItem} ${current.pathname === '/' && style.active}`}>Home</Link>
      <Link to='/shop' className={`${style.navItem} ${current.pathname === '/shop' && style.active}`}>Shop</Link>
      <Link to='/about' className={`${style.navItem} ${current.pathname === '/about' && style.active}`}>About</Link>
    </div>
  )
}

export default Navbar