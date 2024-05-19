import styles from "./footer.module.css";
export const Footer = () => {
  return (
    <footer className={styles.footerStyles}>
      <ul className={styles.socialLinkList}>
        <li className={styles.itemSocialLink}>
          <a href="/" className={styles.socialLink}>
            Instagram
          </a>
        </li>
        <li className={styles.itemSocialLink}>
          <a href="/" className={styles.socialLink}>
            Facebook
          </a>
        </li>
        <li className={styles.itemSocialLink}>
          <a href="/" className={styles.socialLink}>
            YouTube
          </a>
        </li>
        <li className={styles.itemSocialLink}>
          <a href="/" className={styles.socialLink}>
            Telegram
          </a>
        </li>
      </ul>
      <button className={styles.logOutButton}>Log out</button>
    </footer>
  );
};
