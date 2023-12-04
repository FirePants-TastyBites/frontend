import IconSystem from "../IconSystem";
import styles from "./OrderModal.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";

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
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  const isPending = status.toLowerCase() === "pending";
  const hasComment = comment && comment.trim().length > 0;

  const commentClass = hasComment ? styles.commentStyles : "";

  const handleProcessClick = async () => {
    if (isPending && !isProcessed) {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      onProcessOrder(id);
      setIsLoading(false);
      setIsProcessed(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onClose();
    }
  };

  const buttonClass = isProcessed
    ? styles.processed
    : isPending
    ? styles.pending
    : styles.processed;
  const iconName = isProcessed ? "locked" : isPending ? "pending" : "locked";

  const renderButtonContent = () => {
    if (isLoading) {
      return (
        <motion.div
          className={styles.loader}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, loop: Infinity, ease: "linear" }}
        />
      );
    } else {
      return (
        <>
          <IconSystem name={iconName} />
          {isProcessed
            ? "Sent to Kitchen"
            : isPending
            ? "Process Order"
            : "Sent to Kitchen"}
        </>
      );
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
          <button
            className={buttonClass}
            onClick={handleProcessClick}
            disabled={isLoading || isProcessed}
          >
            {renderButtonContent()}
          </button>
        </footer>
      </section>
    </article>
  );
};

export default OrderModal;
