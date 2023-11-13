import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__iconMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className={styles.header__title}>TASTY BITES</div>
      <div className={styles.header__iconCart}>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </header>
  );
};

export default Header;
