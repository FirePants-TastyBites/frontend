import { motion } from "framer-motion";
import styles from "./Modal.module.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/orderSlice";

const Modal = ({ isOpen, onClose, item }) => {
  const dispatch = useDispatch();

  if (!isOpen || !item) return null;

  const { ingredients = [], nutritions: { fat, protein, calories } = {} } =
    item;

  const modalAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    transition: { duration: 0.3 }
  };

  function addToCartAndCloseModal() {
    dispatch(addItem(item));
    onClose();
  }

  return (
    <motion.aside
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={modalAnimation.transition}
    >
      <motion.article
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        variants={modalAnimation}
      >
        <header className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>{item.title}</h3>
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
            Total Protein: <span>{protein} g</span>
          </p>
          <p>
            Total Fat: <span>{fat} g</span>
          </p>
          <p>
            Total Calories: <span>{calories} kcal</span>
          </p>
        </div>
        <button
          className={styles.addToCartButton}
          onClick={addToCartAndCloseModal}
        >
          <i className="fa-solid fa-cart-shopping"></i> Add to Cart
        </button>
      </motion.article>
    </motion.aside>
  );
};

export default Modal;
