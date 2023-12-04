import "./Staff.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import StaffOrdersSection from "../../components/StaffOrdersSection";
import StaffMenuSection from "../../components/StaffMenuSection";
import StaffProfile from "../../components/StaffProfile";

const StaffPage = () => {
  const [orders, setOrders] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://gcr5ddoy04.execute-api.eu-north-1.amazonaws.com/orders")
      .then((response) => {
        console.log(response.data);
        const filteredOrders = response.data.orders.filter(
          (order) => order.orderStatus === "pending"
        );
        setOrders(filteredOrders);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });

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
      <StaffProfile />
      <div className="content-sections">
        <StaffOrdersSection orders={orders} />
        <StaffMenuSection menuItems={menuItems} />
      </div>
    </main>
  );
};

export default StaffPage;
