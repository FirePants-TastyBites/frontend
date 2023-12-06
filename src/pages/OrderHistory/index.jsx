import { useNavigate, useLocation } from "react-router-dom";
import GreenLine from "../../components/GreenLine";
import { useEffect } from "react";
import axios from "axios";

function OrderHistory() {
    const user = useLocation().state?.user || null;
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/error');
        }
    }, [])

    useEffect(() => {
        axios.post('https://gcr5ddoy04.execute-api.eu-north-1.amazonaws.com/user/orders', { userId: user })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }, [])


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
                    <ul></ul>
                </section>
                <section>
                    <h3>Delivered</h3>
                    <ul></ul>
                </section>
                <section>
                    <h3>Cancelled</h3>
                    <ul></ul>
                </section>
            </section>
        </main>
    );
}

export default OrderHistory;