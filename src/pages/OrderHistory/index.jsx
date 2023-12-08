import GreenLine from "../../components/GreenLine";
import OrderHistoryItem from "../../components/OrderHistoryItem";
import "./OrderHistory.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import BigLoader from "../../components/BigLoader";


function OrderHistory() {
  const [cookies, setCookies] = useCookies(["userId"]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .post(
        "https://gcr5ddoy04.execute-api.eu-north-1.amazonaws.com/user/orders",
        { userId: cookies.userId }
      )
      .then((response) => {
        const orders = response.data.orders;
        const updatedOrderHistory = [];

        orders.forEach((order) => {
          if (order.orderStatus === "cancelled") {
            updatedOrderHistory.push({ ...order, status: "cancelled" });
          } else if (isDelivered(order.deliveryTime, order.createdAt)) {
            updatedOrderHistory.push({ ...order, status: "delivered" });
          } else {
            updatedOrderHistory.push({ ...order, status: "inProgress" });
          }
        });

        setOrderHistory(updatedOrderHistory);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
  }, []);

  function isDelivered(deliveryTime, createdAt) {
    // Handle cancelled orders
    if (!deliveryTime) {
      return false;
    }

    // Turn createdAt into ms
    const createdAtInMs = Date.parse(createdAt);

    // Extract date
    const createdAtDate = createdAt.split("T")[0];

    // Create valid Date for delivery and parse into ms
    const deliveryAt = new Date(`${createdAtDate} ${deliveryTime}`);
    const deliveryAtInMs = Date.parse(deliveryAt);

    return Date.now() > deliveryAtInMs;
  }

  return (
    <main className="order-history">
      <header>
        <h1>YOUR ORDERS</h1>
        <GreenLine />
      </header>
      <p>
        Navigate your Tasty Bites food odyssey effortlessly. Peek into your
        Order History, effortlessly reorder cherished meals, and keep your
        culinary journey alive – all at your fingertips.
      </p>

      <section className="orders">

        {
          isLoading ?
            <BigLoader />
            :
            <>

              <section>
                <h3>In progress</h3>
                {orderHistory.filter((order) => order.status === "inProgress")
                  .length > 0 ? (
                  <ul>
                    {orderHistory
                      .filter((order) => order.status === "inProgress")
                      .map((order, index) => (
                        <OrderHistoryItem key={index} order={order} />
                      ))}
                  </ul>
                ) : (
                  <p>No orders</p>
                )}
              </section>
              <section>
                <h3>Delivered</h3>
                {orderHistory.filter((order) => order.status === "delivered").length >
                  0 ? (
                  <ul>
                    {orderHistory
                      .filter((order) => order.status === "delivered")
                      .map((order, index) => (
                        <OrderHistoryItem key={index} order={order} />
                      ))}
                  </ul>
                ) : (
                  <p>No orders</p>
                )}
              </section>
              <section>
                <h3>Cancelled</h3>
                {orderHistory.filter((order) => order.status === "cancelled").length >
                  0 ? (
                  <ul>
                    {orderHistory
                      .filter((order) => order.status === "cancelled")
                      .map((order, index) => (
                        <OrderHistoryItem key={index} order={order} />
                      ))}
                  </ul>
                ) : (
                  <p>No orders</p>
                )}
              </section>
            </>
        }

      </section>
    </main>
  );
}

export default OrderHistory;
