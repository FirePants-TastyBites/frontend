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
    const ordersData = [
      {
        id: "#1234",
        deliveryTime: "12:00",
        userId: "Michael Brown",
        imageUrl: "/tuna.png",
        orderItems: {},
        comment: "",
        priority: 1
      },
      {
        id: "#1235",
        deliveryTime: "12:10",
        userId: "Sarah Johnson",
        imageUrl: "tuna.png",
        orderItems: {},
        comment: "",
        priority: 2
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
      <StaffProfile />
      <div className="content-sections">
        <StaffOrdersSection orders={orders} />
        <StaffMenuSection menuItems={menuItems} />
      </div>
    </main>
  );
};

export default StaffPage;
