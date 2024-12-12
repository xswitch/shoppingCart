import { Outlet } from "react-router-dom"
import Header from "./header/header"
import useFetch from "../../hooks/useFetch";

const App = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products/"
  );
  return (
    <>
      <Header />
      <Outlet context={[data, loading, error]} />
    </>
  )
}

export default App