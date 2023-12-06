import { useNavigate, useLocation } from "react-router-dom";
import GreenLine from "../../components/GreenLine";
import { useEffect, useState } from "react";
import axios from "axios";

function OrderHistory() {
    const user = useLocation().state?.user || null;
    const navigate = useNavigate();
    const [orderHistory, setOrderHistory] = useState({
        inProgress: [],
        delivered: [],
        cancelled: []
    })

    useEffect(() => {
        if (!user) {
            navigate('/error');
        }
    }, [])

    useEffect(() => {
        axios.post('https://gcr5ddoy04.execute-api.eu-north-1.amazonaws.com/user/orders', { userId: user })
            .then(response => {
                const orders = response.data.orders;
                console.log("orders: ", orders)
                orders.forEach(order => {

                    if (order.orderStatus === 'cancelled') {
                        setOrderHistory(prevHistory => ({...prevHistory, cancelled: [...prevHistory.cancelled, order]}));

                    } else if (isDelivered(order.deliveryTime, order.createdAt)) {
                        setOrderHistory(prevHistory => ({...prevHistory, delivered: [...prevHistory.delivered, order]}));

                    } else {
                        setOrderHistory(prevHistory => ({...prevHistory, inProgress: [...prevHistory.inProgress, order]}));
                        
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

        return deliveryAtInMs > Date.now();
    }


    console.log(orderHistory);

    return (
        <main>
            <header>
                <h1>YOUR ORDERS</h1>
                <GreenLine />
            </header>
            <section>
                <p>
                    Navigate your Tasty Bites food odyssey effortlessly. Peek into your Order History, effortlessly reorder cherished meals, and keep your culinary journey alive – all at your fingertips.
                </p>
            </section>
            <section>
                <section>
                    <h3>In progress</h3>
                    <ul>{orderHistory.inProgress.length}</ul>
                </section>
                <section>
                    <h3>Delivered</h3>
                    <ul>{orderHistory.delivered.length}</ul>
                </section>
                <section>
                    <h3>Cancelled</h3>
                    <ul>{orderHistory.cancelled.length}</ul>
                </section>
            </section>
        </main>
    );
}

export default OrderHistory;