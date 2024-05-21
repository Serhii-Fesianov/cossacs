import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Icon from "../Icon/Icon.jsx";

export const Header = () => {
  return (
    <header className={styles.headerStyle}>
      <Link to="/cossacs" className={styles.linkToMainStyle}>
        Cossacs <span>⚔</span>
      </Link>
      <button className={styles.burgerStyle}>
        <Icon id="icon-burger" className={styles.BurgerStyleSvg} />
      </button>
    </header>
  );
};
