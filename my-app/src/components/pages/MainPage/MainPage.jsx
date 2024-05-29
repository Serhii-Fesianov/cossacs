import { Link } from "react-router-dom";
import { Footer } from "../../Footer/Footer";
import { Header } from "../../Header/Header";
import styles from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <>
      <Header />
      <div className={styles.WrapperMainContent}>
        <img
          src={require("../../../assets/images/Hero.jpg")}
          alt="hero"
          className={styles.heroImage}
        />
        <ul className={styles.listNavigationMain}>
          <li className={styles.itemNavigation}>
            <Link className={styles.linkNavigation}>🌟Events</Link>
          </li>
          <li className={styles.itemNavigation}>
            <Link className={styles.linkNavigation}>📋Quests</Link>
          </li>
          <li className={styles.itemNavigation}>
            <Link className={styles.linkNavigation}>🏹Hunting</Link>
          </li>
          <li className={styles.itemNavigation}>
            <Link className={styles.linkNavigation}>🐎Walk to Tatars</Link>
          </li>
          <li className={styles.itemNavigation}>
            <Link className={styles.linkNavigation}>🏰Castle</Link>
          </li>
          <li className={styles.itemNavigation}>
            <Link className={styles.linkNavigation}>🏡Home</Link>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};
