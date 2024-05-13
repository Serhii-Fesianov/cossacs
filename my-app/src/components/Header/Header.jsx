import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.headerStyle}>
      <Link to="/" className={styles.linkToMainStyle}>
        Cossacs
      </Link>
      <button className={styles.burgerStyle}></button>
    </header>
  );
};
