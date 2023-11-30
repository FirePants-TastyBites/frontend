import IconSystem from "../IconSystem";
import "./StaffOrders.scss";
import { useNavigate } from "react-router-dom";

const StaffOrdersSection = ({ orders }) => {
  const navigate = useNavigate();
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
      {/* userId, totalAmount, deliveryTime, orderItems, comment */}
      {orders.map((order) => (
        <article className="order-item" key={order.id}>
          <div className="order-image-container">
            <img className="order-image" src={order.imageUrl} alt="Order" />
          </div>

          <div className="order-info-container">
            <div className="order-info">
              <p className="order-id">{order.id}</p>
              <time className="order-time">{order.deliveryTime}</time>
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
