import React from "react";
import { Header } from "../../Header/Header";
import { Footer } from "../../Footer/Footer";
import styles from "./AuthPage.module.css";

export const AuthPage = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapperAuthContent}>
        <img
          src={require("../../../assets/images/cossac on horse.png")}
          alt="Welcom card"
          className={styles.imageAuth}
        />
        <form className={styles.wrapperForm}>
          <div className={styles.wrapperInputs}>
            <h2 className={styles.titleAuth}>Login Now!</h2>
            <h3>Email</h3>
            <input
              type="text"
              placeholder="Email"
              className={styles.inputStyle}
              required
            />
            <h3>Password</h3>
            <input
              type="password"
              placeholder="Password"
              className={styles.inputStyle}
              required
            />
            <button className={styles.loginButton}>Login</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
