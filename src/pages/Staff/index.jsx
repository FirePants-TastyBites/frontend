import "./Staff.scss";
import { useState, useEffect } from "react";
import axios from "axios";
const StaffPage = () => {
  const [orders, setOrders] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const ordersData = [
      {
        id: "#1234",
        time: "12:00",
        customerName: "Michael Brown",
        imageUrl: "/tuna.png"
      },
      {
        id: "#1235",
        time: "12:10",
        customerName: "Sarah Johnson",
        imageUrl: "tuna.png"
      }
    ];

    setOrders(ordersData);

    axios
      .get("https://gcr5ddoy04.execute-api.eu-north-1.amazonaws.com/menu")
      .then((response) => {
        setMenuItems(response.data.menu);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  }, []);
  return (
    <main className="staff-page">
      <section className="profile-section">
        <div className="profile-container">
          <img className="profile-picture" src="/maria.png" alt="Profile" />
          <section className="profile-details">
            <p className="profile-name">Maria Gomez</p>
            <p className="profile-email">Maria@Tastybites.se</p>
          </section>
          <p className="profile-description">
            Stay on top of your daily tasks and manage your workflow efficiently
            with the Staff Task Manager.
          </p>
        </div>
      </section>

      <div className="content-sections">
        <section className="orders-section">
          <header className="section-header">
            <div className="section-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 9C14.5 9 16 10 17 12M12 6C7.58172 6 4 9.58172 4 14C4 15.4571 4.38958 16.8233 5.07026 18M12 6C16.4183 6 20 9.58172 20 14C20 15.4571 19.6104 16.8233 18.9297 18M12 6C12.8284 6 13.5 5.32843 13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5C10.5 5.32843 11.1716 6 12 6ZM4.5 21H19.5C20.3284 21 21 20.3284 21 19.5C21 18.6716 20.3284 18 19.5 18H4.5C3.67157 18 3 18.6716 3 19.5C3 20.3284 3.67157 21 4.5 21Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="title">Orders to handle</p>
          </header>

          {orders.map((order) => (
            <article className="order-item" key={order.id}>
              <div className="order-image-container">
                <img className="order-image" src={order.imageUrl} alt="Order" />
              </div>

              <div className="order-info-container">
                <div className="order-info">
                  <p className="order-id">{order.id}</p>
                  <time className="order-time">{order.time}</time>
                </div>
                <p className="customer-name">{order.customerName}</p>
              </div>
            </article>
          ))}
          <a href="/staff-orders" className="menu-button">
            See All Orders
          </a>
        </section>

        <section className="menu-section">
          <header className="section-header">
            <div className="section-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="25"
                viewBox="0 0 27 25"
                fill="none"
              >
                <path
                  d="M17.5615 6.36145V4.64577C17.5615 3.87724 17.5615 3.49298 17.3844 3.24458C17.2296 3.02724 16.9881 2.87317 16.711 2.81482C16.3943 2.74814 15.9979 2.87946 15.2052 3.1421L7.22223 5.78697C6.59752 5.99394 6.28517 6.09743 6.05478 6.27982C5.85128 6.44093 5.69432 6.64511 5.59768 6.87441C5.48828 7.13401 5.48828 7.43683 5.48828 8.04247V12.3614M9.87853 17.3614H16.4639M9.87853 13.8614H16.4639M9.87853 10.3614H16.4639M9.00048 21.3614H17.3419C18.5713 21.3614 19.186 21.3614 19.6556 21.1435C20.0686 20.9517 20.4044 20.6458 20.6149 20.2694C20.8541 19.8416 20.8541 19.2816 20.8541 18.1614V9.56145C20.8541 8.44134 20.8541 7.88129 20.6149 7.45347C20.4044 7.07714 20.0686 6.77118 19.6556 6.57944C19.186 6.36145 18.5713 6.36145 17.3419 6.36145H9.00048C7.77109 6.36145 7.1564 6.36145 6.68684 6.57944C6.2738 6.77118 5.93799 7.07714 5.72754 7.45347C5.48828 7.88129 5.48828 8.44134 5.48828 9.56145V18.1614C5.48828 19.2816 5.48828 19.8416 5.72754 20.2694C5.93799 20.6458 6.2738 20.9517 6.68684 21.1435C7.1564 21.3614 7.77109 21.3614 9.00048 21.3614Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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

          <a href="/staff-menu" className="menu-button">
            Update Availability
          </a>
        </section>
      </div>
    </main>
  );
};

export default StaffPage;
