import { useState } from "react";
import { motion } from "framer-motion";
import IconSystem from "../IconSystem";
import "./StaffOrdersCard.scss";

const StaffOrdersCard = ({
  id,
  time,
  status,
  userId,
  comment,
  priority,
  onOpenModal,
  onProcessOrder
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const isPending = status.toLowerCase() === "pending";
  const hasComment = comment && comment.trim() !== "";

  const handleButtonClick = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    onProcessOrder(id);
  };

  return (
    <article className={`orders-card ${isPending ? "pending" : "processed"}`}>
      <header onClick={() => onOpenModal(id)}>
        <article className="image-container">
          <img src="/tuna.png" alt="Order Image" className="order-image" />
          {isPending && <strong className="priority">{priority}</strong>}
        </article>
        <section className="order-details-container">
          <div>
            <p>#{id}</p>
            <time>{time}</time>
          </div>
          <div className="orders-body">
            <p>
              {hasComment ? (
                <span>
                  <IconSystem name="comment" /> Special Request
                </span>
              ) : (
                "No request"
              )}
            </p>
            <p className="user">{userId}</p>
          </div>
        </section>
      </header>
      <footer>
        {isPending ? (
          <button
            className="orders-card-button unlock"
            onClick={handleButtonClick}
            disabled={isLoading}
          >
            {isLoading ? (
              <motion.div
                className="loader"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, loop: Infinity, ease: "linear" }}
              />
            ) : (
              <>
                <IconSystem name="pending" />
                Process Order
              </>
            )}
          </button>
        ) : (
          <button
            className="orders-card-button lock"
            onClick={() => onOpenModal(id)}
          >
            <IconSystem name="locked" />
            Sent to Kitchen
          </button>
        )}
      </footer>
    </article>
  );
};

export default StaffOrdersCard;
