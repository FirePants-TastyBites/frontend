import GreenLine from "../../components/GreenLine";
import OrderHistoryItem from "../../components/OrderHistoryItem";
import './OrderHistory.scss';
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function OrderHistory() {
    const userId = useSelector(state => state.order.userId);
    const [orderHistory, setOrderHistory] = useState({
        inProgress: [],
        delivered: [],
        cancelled: []
    })

    useEffect(() => {
        axios.post('https://gcr5ddoy04.execute-api.eu-north-1.amazonaws.com/user/orders', { userId })
            .then(response => {
                const orders = response.data.orders;
            
                orders.forEach(order => {

                    if (order.orderStatus === 'cancelled') {
                        setOrderHistory(prevHistory => ({ ...prevHistory, cancelled: [...prevHistory.cancelled, order] }));

                    } else if (isDelivered(order.deliveryTime, order.createdAt)) {
                        setOrderHistory(prevHistory => ({ ...prevHistory, delivered: [...prevHistory.delivered, order] }));

                    } else {
                        setOrderHistory(prevHistory => ({ ...prevHistory, inProgress: [...prevHistory.inProgress, order] }));

                    }

                });
            })
            .catch(error => console.log(error))
    }, [])

    function isDelivered(deliveryTime, createdAt) {

        // Handle cancelled orders
        if (!deliveryTime) {
            return false;
        }

        // Turn createdAt into ms
        const createdAtInMs = Date.parse(createdAt);

        // Extract date
        const createdAtDate = createdAt.split('T')[0]

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
                Navigate your Tasty Bites food odyssey effortlessly. Peek into your Order History, effortlessly reorder cherished meals, and keep your culinary journey alive – all at your fingertips.
            </p>

            <section className="orders">
                <section>
                    <h3>In progress</h3>
                    {
                        orderHistory.inProgress.length > 0 ?
                            <ul>
                                {orderHistory.inProgress.map((order, index) => <OrderHistoryItem key={index} order={order} />)}
                            </ul>
                            :
                            <p>No orders</p>
                    }
                </section>
                <section>
                    <h3>Delivered</h3>
                    {
                        orderHistory.delivered.length > 0 ?
                            <ul>
                                {orderHistory.delivered.map((order, index) => <OrderHistoryItem key={index} order={order} />)}
                            </ul>
                            :
                            <p>No orders</p>
                    }
                </section>
                <section>
                    <h3>Cancelled</h3>
                    {
                        orderHistory.cancelled.length > 0 ?
                            <ul>
                                {orderHistory.cancelled.map((order, index) => <OrderHistoryItem key={index} order={order} />)}
                            </ul>
                            :
                            <p>No orders</p>
                    }
                </section>
            </section>
        </main>
    );
}

export default OrderHistory;