import React from "react";
import { Header } from "../../Header/Header";
import { Footer } from "../../Footer/Footer";
import { Link } from "react-router-dom";
import styles from "./WelcomePage.module.css";

export const WelcomePage = () => {
  return (
    <div>
      <Header />
      <div className={styles.WrapperWelcom}>
        <img
          src={require("../../../assets/images/cossac with magic.png")}
          alt="welcom-Hero"
          className={styles.WelcomImage}
        />
        <ul className={styles.NavigationList}>
          <li>
            <Link to="/auth" className={styles.LinkNavStyles}>
              Authorization
            </Link>
          </li>
          <li>
            <Link to="/register" className={styles.LinkNavStyles}>
              Create a new account
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};
