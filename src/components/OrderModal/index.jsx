import IconSystem from "../IconSystem";
import styles from "./OrderModal.module.scss";

const OrderModal = ({
  id,
  status,
  comment,
  orderedItems,
  userId,
  deliveryTime,
  orderTime,
  onClose,
  onProcessOrder
}) => {
  const isPending = status.toLowerCase() === "pending";
  const hasComment = comment && comment.trim().length > 0;

  const buttonClass = isPending ? styles.pending : styles.processed;
  const iconName = isPending ? "pending" : "locked";
  const commentClass = hasComment ? styles.commentStyles : "";

  const handleProcessClick = () => {
    if (isPending) {
      onProcessOrder(id);
      onClose();
    }
  };

  return (
    <article className={styles.modalOverlay}>
      <section className={styles.modal}>
        <header className={styles.modalHeader}>
          <h6 className={styles.modalHeaderHeading}>Order #{id}</h6>
          <IconSystem name="close" className={styles.icon} onClick={onClose} />
        </header>
        <section className={styles.modalBody}>
          <p className={styles.status}>Status: {status}</p>
          <p className={`${styles.comment} ${commentClass}`}>
            {hasComment && (
              <IconSystem name="comment" className={styles.commentIcon} />
            )}
            {hasComment ? comment : "Order has no special request"}
          </p>
          <ul className={styles.orderedItems}>
            {orderedItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className={styles.timeInfo}>
            <p>Order time: {orderTime}</p>
            <p>Estimated Delivery time: {deliveryTime}</p>
            <p className={styles.customer}>Customer: {userId}</p>
          </div>
        </section>
        <footer className={styles.modalFooter}>
          <button className={buttonClass} onClick={handleProcessClick}>
            <IconSystem name={iconName} />
            {isPending ? "Process Order" : "Sent to Kitchen"}
          </button>
        </footer>
      </section>
    </article>
  );
};

export default OrderModal;
