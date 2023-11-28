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
  const isPending = status.toLowerCase() === "pending";
  const hasComment = comment && comment.trim() !== "";

  return (
    <article className={`orders-card ${isPending ? "pending" : "processed"}`}>
      <header onClick={() => onOpenModal(id)}>
        <div className="image-container">
          <img src="/tuna.png" alt="Order Image" className="order-image" />
          <strong className="priority">{priority}</strong>
        </div>

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
            onClick={() => onProcessOrder(id)}
          >
            <IconSystem name="pending" />
            Process Order
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
