import style from "./homeContainer.module.css";

const HomeContainer = ({ children }) => {
  return (
    <div className={style.titleContainer}>
      <div>{children}</div>
    </div>
  );
};

export default HomeContainer;
