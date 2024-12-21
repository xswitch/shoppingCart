import { Search } from 'lucide-react'
import style from './searchBar.module.css'

export default function SearchBar({changeSearch}) {
  return (
    <div className={style.container}>
      <input type="search" name="searchBar" id="searchBar" placeholder='Search...' onChange={(e) => changeSearch(e)} />
      <Search />
    </div>
  )
}