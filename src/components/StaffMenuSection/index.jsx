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
      <header>
        <div className="section-icon">
          <IconSystem name="menu" />
        </div>
        <p>Current Menu</p>
      </header>
      {menuItems.map((menu) => (
        <section key={menu.id}>
          <div>
            <img className="menu-image-small" src={menu.url} alt={menu.title} />
          </div>
          <article>
            <div className="menu-info">
              <p>{menu.title}</p>
              <p>{menu.price}</p>
            </div>
          </article>
        </section>
      ))}

      <button onClick={handleViewMenuClick}>Update Availability</button>
    </section>
  );
};
export default StaffMenuSection;
