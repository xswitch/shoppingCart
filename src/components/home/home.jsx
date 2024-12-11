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
      <div className={style.buttonContainer}>
        <Link className={style.homeButton} to='/shop'>SHOP NOW</Link>
        <Link className={style.homeButton} to='/about'>LEARN MORE</Link>
      </div>
      <HomeContainer>
        <p className={style.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quas,
          tempora, voluptatibus explicabo, laudantium error atque ex animi id
          cum ipsa at rerum illo nesciunt nisi vero! Quaerat, temporibus
          aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugiat, aperiam veritatis! Quam nisi at, iure tenetur autem natus
          asperiores numquam molestiae vel quisquam itaque placeat, porro atque
          cumque quibusdam esse!
        </p>
      </HomeContainer>
      <HomeContainer>
        <h1 className={style.largeTitle}>HUGE SALE</h1>
        <h2 className={style.mediumTitle}>SAVE UP TO 50% OFF!</h2>
      </HomeContainer>
    </div>
  );
};

export default Home;
