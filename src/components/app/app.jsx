import { Outlet } from "react-router-dom"
import Header from "./header/header"

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App