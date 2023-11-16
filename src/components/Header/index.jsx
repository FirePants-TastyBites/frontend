import { useState } from "react";
import HamburgerNav from "../HamburgerNav";
import styles from "./header.module.scss";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <header className={styles.header}>
      <div
        className={styles.header__iconMenu}
        onClick={() => setIsVisible(!isVisible)}
      >
        <i className="fa-solid fa-bars"></i>
      </div>
      <HamburgerNav isVisible={isVisible} setIsVisible={setIsVisible} />

      <div className={styles.header__title}>TASTY BITES</div>
      <div className={styles.header__iconCart}>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </header>
  );
};

export default Header;
