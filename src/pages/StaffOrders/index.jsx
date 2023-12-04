import { useState, useEffect } from "react";
import TabButtons from "../../components/TabButtons";
import StaffOrdersCard from "../../components/StaffOrdersCard";
import OrderModal from "../../components/OrderModal";
import { motion, AnimatePresence } from "framer-motion";
import "./Orders.scss";

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

const StaffOrdersPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isTabClicked, setIsTabClicked] = useState(false);

  console.log("Orders:", selectedOrder);
  const tabs = [
    { id: "all", label: "All" },
    { id: "pending", label: "Pending" },
    { id: "completed", label: "Completed" }
  ];

  useEffect(() => {
    fetch("https://gcr5ddoy04.execute-api.eu-north-1.amazonaws.com/orders")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.orders);

        const transformedOrders = data.orders.map((order) => ({
          id: order.id,
          userId: order.userId,
          totalAmount: order.totalPrice,
          time: new Date(order.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          }),
          orderItems: order.cart,
          comment: order.comment,
          status: order.orderStatus
        }));

        setOrders(prioritizeOrders(transformedOrders));
      })
      .catch((error) => {
        console.error("Failed to fetch orders:", error);
      });
  }, []);
  useEffect(() => {
    setOrders((prevOrders) => {
      return prevOrders.map((order, index) => ({
        ...order,
        priority: index + 1
      }));
    });
  }, []);

  useEffect(() => {
    if (isTabClicked) {
      setTimeout(() => setIsTabClicked(false), 300);
    }
  }, [isTabClicked]);

  const sortOrders = (tab) => {
    setActiveTab(tab);
    setIsTabClicked(true);
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

  const pendingOrderCount = orders.filter(
    (order) => order.status === "pending"
  ).length;

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  const handleOpenModal = (orderId) => {
    const order = orders.find((o) => o.id === orderId);
    setSelectedOrder(order);
  };

  const handleProcessOrder = (orderId) => {
    setOrders((prevOrders) => {
      const updatedOrders = prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: "completed" } : order
      );

      const updatedPendingOrders = updatedOrders.filter(
        (order) => order.status === "pending"
      );

      const updatedPrioritizedPendingOrders = updatedPendingOrders.map(
        (order, index) => ({
          ...order,
          priority: index + 1
        })
      );

      return [
        ...updatedPrioritizedPendingOrders,
        ...updatedOrders.filter(
          (order) =>
            order.status === "completed" || order.status === "delivered"
        )
      ];
    });
  };

  return (
    <main className="staff-order-page">
      <header>
        <h6>Welcome Maria Gomez!</h6>
        <p>
          There are ongoing <span>{pendingOrderCount}</span> orders at this time
          that need your attention.
        </p>
      </header>

      <TabButtons
        activeTab={activeTab}
        onClick={sortOrders}
        tabs={tabs}
        caption="Orders to handle"
      />

      <strong>Orders to handle</strong>
      <section className="orders-container">
        <AnimatePresence initial={false}>
          {filteredOrders().map((order) => (
            <motion.div
              key={order.id}
              initial={isTabClicked ? { opacity: 0, y: 10 } : {}}
              animate={isTabClicked ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <StaffOrdersCard
                id={order.id}
                time={order.time}
                status={order.status}
                userId={order.userId}
                comment={order.comment}
                priority={
                  order.status === "pending" ? order.priority : undefined
                }
                onOpenModal={() => handleOpenModal(order.id)}
                onProcessOrder={handleProcessOrder}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {selectedOrder && (
        <OrderModal
          id={selectedOrder.id}
          status={selectedOrder.status}
          comment={selectedOrder.comment}
          orderedItems={selectedOrder.orderItems || []}
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
