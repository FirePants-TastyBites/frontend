import { useEffect, useState } from "react";
import HamburgerNav from "../HamburgerNav";
import styles from "./header.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { animate } from "framer-motion";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const orderItems = useSelector(state => state.order.orderItems);
 
  let itemsInCart = 0;
  let displayItemsInCart = { display: 'none' };

  useEffect(() => {
    animate(".items-in-cart", {y: [0, -10, 0]});

  }, [orderItems])
  
  if (orderItems.length > 0) {

    orderItems.forEach(item => {
      itemsInCart += item.qty;
    });

    displayItemsInCart = { display: 'flex' }
  }
  

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
      <div className={styles.header__iconCart} onClick={() => navigate('/cart')}>
        <aside className={ `items-in-cart ${styles.itemsInCart}`} style={displayItemsInCart}>{itemsInCart}</aside>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </header>
  );
};

export default Header;
