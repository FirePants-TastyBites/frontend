import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import IconSystem from "../IconSystem";
import { motion } from "framer-motion";
import "./StaffOrders.scss";

const formatTime = (dateTime) => {
  const date = new Date(dateTime);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: { duration: 1, repeat: Infinity, ease: "linear" },
  },
};

const StaffOrdersSection = ({ orders, isLoading }) => {
  const navigate = useNavigate();

  const pendingOrders = useMemo(() => {
    return orders
      .filter((order) => order.orderStatus === "pending")
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      .slice(0, 4);
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

      {isLoading ? (
        <motion.div
          className="loader"
          animate={{ rotate: 360 }}
          variants={spinnerVariants}
        />
      ) : pendingOrders.length > 0 ? (
        pendingOrders.map((order) => (
          <article className="order-item" key={order.id}>
            <div className="order-image-container">
              <img
                className="order-image"
                src={order.cart[0].url}
                alt="Order"
              />
            </div>
            <div className="order-info-container">
              <div className="order-info">
                <p className="order-id truncated-text" title={order.id}>
                  #{order.id}
                </p>
                <time className="order-time">
                  {formatTime(order.createdAt)}
                </time>
              </div>
              <p className="customer-name">{order.userId}</p>
            </div>
          </article>
        ))
      ) : (
        <p>No pending orders to process.</p>
      )}

      <button onClick={handleViewAllOrdersClick}>See All Orders</button>
    </section>
  );
};

export default StaffOrdersSection;
