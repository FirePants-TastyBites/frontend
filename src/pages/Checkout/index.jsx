import GreenLine from "../../components/GreenLine";
import Button from "../../components/Button";
import DetailsButton from '../../components/DetailsButton';
import './Checkout.scss';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetOrder } from "../../store/orderSlice";
import { animate } from "framer-motion";
import axios from "axios";

function Checkout() {
    const order = useSelector(state => state.order);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function placeOrder() {

        if (order.cart.length  < 1) {
            navigate('/error');
        }

        axios.post('https://gcr5ddoy04.execute-api.eu-north-1.amazonaws.com/order', order)
            .then(async () => {
                await animate(".checkout", { x: ["0%", "-100%"], opacity: [1, 0]});
                navigate(`/confirmation/${order.id}`);
                dispatch(resetOrder());
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        animate("section", { opacity: [0, 1], transition: { duration: .3} })
    }, [])

    return (
        <main className="checkout">
            <header>
                <h1>Checkout</h1>
                <GreenLine />
            </header>
            <section className="delivery-info">
                <section className="time">
                    <h4>Estimated Delivery Time</h4>
                    <div>
                        <p>ASAP (25min)</p>
                        <DetailsButton>Change</DetailsButton>
                    </div>
                </section>
                <section className="time">
                    <h4>Email</h4>
                    <div>
                        <p>user@example.com</p>
                        <DetailsButton>Change</DetailsButton>
                    </div>
                </section>
                <section className="address">
                    <h4>Delivery Address</h4>
                    <div>
                        <p>Sherwood Forest 1</p>
                        <DetailsButton>Change</DetailsButton>
                    </div>
                </section>
                <section className="payment">
                    <h4>Payment Method</h4>
                    <div>
                        <p>Apple Pay</p>
                        <DetailsButton>Change</DetailsButton>
                    </div>
                </section>
            </section>
            <section className="total-price">
                <p>Total Price</p>
                <p>{order.totalPrice} kr</p>
            </section>

            <Button label={"Place Your Order"} type={"primary"} onClick={placeOrder} />

        </main>
    );
}

export default Checkout;