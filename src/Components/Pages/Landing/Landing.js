import styles from "./Landing.module.css";
import Search from "../../Search/Search";
import List from "../../List/List";

const Landing = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Welcome to MovieDB</h1>
      <p>Please search for a movie</p>
      <Search />
      <List />
    </div>
  );
};

export default Landing;
