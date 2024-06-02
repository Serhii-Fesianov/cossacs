import React from "react";
import { Header } from "../../Header/Header";
import { Footer } from "../../Footer/Footer";
import styles from "./AuthPage.module.css";

export const AuthPage = () => {
  return (
    <>
      <Header />
      <div>
        <h1>Login now!</h1>
        <img src="" alt="Welcom card" />
        <form>
          <div>
            <h3>Nickname</h3>
            <input
              type="text"
              placeholder="Nickname"
              className={styles.inputStyle}
              required
            />
          </div>
          <div>
            <h3>Password</h3>
            <input
              type="password"
              placeholder="password"
              className={styles.inputStyle}
              required
            />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
