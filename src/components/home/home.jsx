import { Link } from "react-router-dom";
import style from "./home.module.css";
import HomeContainer from "./gridItem/homeContainer";

const Home = () => {
  return (
    <div className={style.container}>
      <HomeContainer>
        <h2 className={style.mediumTitle}>BUY EVERYTHING YOU NEED</h2>
        <h1 className={style.largeTitle}>
          ONLINE
          <br />
          SHOPPING
        </h1>
      </HomeContainer>
      <HomeContainer>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quas,
          tempora, voluptatibus explicabo, laudantium error atque ex animi id
          cum ipsa at rerum illo nesciunt nisi vero! Quaerat, temporibus
          aperiam.
        </p>
      </HomeContainer>
    </div>
  );
};

export default Home;
