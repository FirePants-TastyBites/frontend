import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import IconSystem from "../IconSystem";
import "./StaffOrders.scss";

const formatTime = (dateTime) => {
  const date = new Date(dateTime);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });
};

const StaffOrdersSection = ({ orders }) => {
  const navigate = useNavigate();

  const sortedOrders = useMemo(() => {
    return [...orders].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  }, [orders]);

  const handleViewAllOrdersClick = () => {
    navigate("/staff/orders");
  };

  return (
    <section className="orders-section">
      <header className="section-header">
        <div className="section-icon">
          <IconSystem name="orders" />
        </div>
        <p className="title">Orders to handle</p>
      </header>
      {sortedOrders.map((order) => (
        <article className="order-item" key={order.id}>
          <div className="order-image-container">
            <img className="order-image" src={order.cart[0].url} alt="Order" />
          </div>

          <div className="order-info-container">
            <div className="order-info">
              <p className="order-id truncated-text" title={order.id}>
                #{order.id}
              </p>
              <time className="order-time">{formatTime(order.createdAt)}</time>
            </div>
            <p className="customer-name">{order.userId}</p>
          </div>
        </article>
      ))}
      <button onClick={handleViewAllOrdersClick} className="menu-button">
        See All Orders
      </button>
    </section>
  );
};

export default StaffOrdersSection;
