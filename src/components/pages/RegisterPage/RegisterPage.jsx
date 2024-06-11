import React from "react";
import { Header } from "../../Header/Header";
import { Footer } from "../../Footer/Footer";
import styles from "./RegisterPage.module.css";

export const RegisterPage = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapperRegister}>
        <img
          src={require("../../../assets/images/cossac on horse.png")}
          alt="Welcom card"
          className={styles.registerPicture}
        />
        <form className={styles.wrapperForm}>
          <div className={styles.wrapperInputs}>
            <h2 className={styles.tittleRegister}>Create a new Hero now!</h2>
            <h3>Nickname</h3>
            <input
              type="text"
              placeholder="login"
              className={styles.inputStyle}
              required
            />
            <h3>Password</h3>
            <input
              type="password"
              placeholder="password"
              className={styles.inputStyle}
              required
            />
            <button className={styles.registerButton}>Register</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
