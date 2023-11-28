import IconSystem from "../IconSystem";
import "./StaffMenu.scss";
import { useNavigate } from "react-router-dom";

const StaffMenuSection = ({ menuItems }) => {
  const navigate = useNavigate();
  const handleViewMenuClick = () => {
    navigate("/staff/menu");
  };
  return (
    <section className="menu-section">
      <header className="section-header">
        <div className="section-icon">
          <IconSystem name="menu" />
        </div>
        <p className="title">Current Menu</p>
      </header>
      {menuItems.map((menu) => (
        <article className="menu-item" key={menu.id}>
          <div className="menu-image-container">
            <img
              className="menu-image-small"
              src={menu.url}
              alt={menu.itemName}
            />
          </div>
          <div className="menu-info-container">
            <div className="order-info">
              <p className="menu-name">{menu.itemName}</p>
              <p className="menu-price">{menu.price}</p>
            </div>
          </div>
        </article>
      ))}

      <button onClick={handleViewMenuClick} className="menu-button">
        Update Availability
      </button>
    </section>
  );
};
export default StaffMenuSection;
