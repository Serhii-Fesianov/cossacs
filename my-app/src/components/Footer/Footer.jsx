import styles from "./footer.module.css";
export const Footer = () => {
  return (
    <footer className={styles.footerStyles}>
      <ul className={styles.socialLinkList}>
        <li className={styles.itemSocialLink}></li>
        <li className={styles.itemSocialLink}></li>
        <li className={styles.itemSocialLink}></li>
        <li className={styles.itemSocialLink}></li>
      </ul>
      <button className={styles.logOutButton}>Log out</button>
    </footer>
  );
};
