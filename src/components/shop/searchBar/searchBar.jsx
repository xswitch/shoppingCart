import { Search } from 'lucide-react'
import style from './searchBar.module.css'

export default function SearchBar() {
  return (
    <div>
      <input type="search" name="searchBar" id="searchBar" />
      <Search />
    </div>
  )
}