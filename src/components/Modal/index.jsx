import styles from "./Modal.module.scss";

const Modal = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;

  const { ingredients = [], description: { fat, protein, calories } = {} } =
    item;

  return (
    <aside
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <article
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{item.itemName}</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close"
          >
            <i className="fa-solid fa-x"></i>
          </button>
        </header>
        <ul className={styles.ingredientsList}>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <div className={styles.nutritionalInfo}>
          <p>
            Total Protein: <span>{protein}g</span>
          </p>
          <p>
            Total Fat: <span>{fat}g</span>
          </p>
          <p>
            Total Calories: <span>{calories}cal</span>
          </p>
        </div>

        <button className={styles.addToCartButton}>
          <i className="fa-solid fa-cart-shopping"></i> Add to Cart
        </button>
      </article>
    </aside>
  );
};

export default Modal;
