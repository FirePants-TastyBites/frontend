import "./Orders.scss";
import { useState, useEffect } from "react";
import TabButtons from "../../components/TabButtons";
import StaffOrdersCard from "../../components/StaffOrdersCard";
import OrderModal from "../../components/OrderModal";

const prioritizeOrders = (orders) => {
  const pendingOrders = orders.filter((order) => order.status === "pending");
  const completedOrders = orders.filter(
    (order) => order.status === "completed" || order.status === "delivered"
  );

  pendingOrders.sort(
    (a, b) =>
      new Date("2023/01/01 " + a.time) - new Date("2023/01/01 " + b.time)
  );
  completedOrders.sort(
    (a, b) =>
      new Date("2023/01/01 " + a.time) - new Date("2023/01/01 " + b.time)
  );

  const prioritizedPendingOrders = pendingOrders.map((order, index) => ({
    ...order,
    priority: index + 1
  }));

  return [...prioritizedPendingOrders, ...completedOrders];
};
const initialOrders = [
  {
    id: "1234",
    userId: "Michael Brown",
    totalAmount: 299,
    time: "12:00",
    orderItems: ["Heavenly Tuna", "Avocado Turkey Club"],
    comment: "no onions",
    status: "pending"
  },
  {
    id: "1235",
    totalAmount: 199,
    time: "9:30",
    orderItems: ["Heavenly Tuna"],
    comment: "",
    status: "delivered",
    userId: "Shahin"
  },
  {
    id: "1236",
    totalAmount: 199,
    time: "10:30",
    orderItems: ["Heavenly Tuna"],
    comment: "",
    status: "pending",
    userId: "Michael Brown"
  }
];

const StaffOrdersPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [orders, setOrders] = useState(prioritizeOrders(initialOrders));
  const [selectedOrder, setSelectedOrder] = useState(null);

  const tabs = [
    { id: "all", label: "All" },
    { id: "pending", label: "Pending" },
    { id: "completed", label: "Completed" }
  ];

  useEffect(() => {
    const setPriorities = (orders) => {
      return orders.map((order, index) => ({
        ...order,
        priority: index + 1
      }));
    };

    setOrders((prevOrders) => setPriorities([...prevOrders]));
  }, []);

  const sortOrders = (tab) => {
    setActiveTab(tab);
  };

  const filteredOrders = () => {
    if (activeTab === "all") {
      return orders;
    } else if (activeTab === "pending") {
      return orders.filter((order) => order.status === "pending");
    } else {
      return orders.filter(
        (order) => order.status === "completed" || order.status === "delivered"
      );
    }
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  const handleOpenModal = (orderId) => {
    const order = orders.find((o) => o.id === orderId);
    setSelectedOrder(order);
  };

  const handleProcessOrder = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: "completed" } : order
      )
    );
  };
  return (
    <main className="staff-order-page">
      <header>
        <h6>Welcome Maria Gomez!</h6>
        <p>
          There are ongoing <span> {filteredOrders.length} </span> orders at
          this time that need your attention.
        </p>
      </header>
      <TabButtons activeTab={activeTab} onClick={sortOrders} tabs={tabs} />

      <strong>Orders to handle</strong>
      <section className="orders-container">
        {filteredOrders().length > 0 ? (
          filteredOrders().map((order) => (
            <StaffOrdersCard
              key={order.id}
              id={order.id}
              time={order.time}
              status={order.status}
              userId={order.userId}
              comment={order.comment}
              priority={order.status === "pending" ? order.priority : undefined}
              onOpenModal={() => handleOpenModal(order.id)}
              onProcessOrder={handleProcessOrder}
            />
          ))
        ) : (
          <p className="">
            You handled all the orders. <br />
            All Done
          </p>
        )}
      </section>

      {selectedOrder && (
        <OrderModal
          id={selectedOrder.id}
          status={selectedOrder.status}
          comment={selectedOrder.comment}
          orderedItems={selectedOrder.orderItems}
          userId={selectedOrder.userId}
          deliveryTime={"12:40"}
          orderTime={selectedOrder.time}
          onClose={handleCloseModal}
          onProcessOrder={handleProcessOrder}
        />
      )}
    </main>
  );
};

export default StaffOrdersPage;
