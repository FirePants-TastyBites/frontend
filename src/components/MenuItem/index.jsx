import { useDispatch } from "react-redux";
import styles from "./MenuItem.module.scss";
import { addItem } from "../../store/orderSlice";

const MenuItem = ({ item, name, price, imageUrl, category, onIconClick }) => {
  const dispatch = useDispatch();

  return (
    <section className={styles.menuItem}>
      <article className={styles.itemContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={styles.infoIcon}
        >
          <path
            d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="#03A864"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <img src={imageUrl} alt={name} onClick={onIconClick} />
      </article>
      <article className={styles.itemDetails}>
        <p className={styles.itemName}>{name}</p>
        <article className={styles.itemInfoContainer}>
          <p>{category}</p>
          <span>{price} kr</span>
        </article>
      </article>
      <article className={styles.btnContainer}>
        <button onClick={() => dispatch(addItem(item))} className={styles.addToCart}>Add to Cart</button>
      </article>
    </section>
  );
};

export default MenuItem;
