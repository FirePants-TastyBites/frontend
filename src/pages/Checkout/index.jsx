import { useLocation } from "react-router-dom";
import GreenLine from "../../components/GreenLine";
import Button from "../../components/Button";
import './Checkout.scss';
import { useEffect } from "react";

function Checkout() {
    const order = useLocation().state;
    console.log("order: ", order);

    function placeOrder() {
        // Sätt timer?
        // skicka order till databas
        // Töm cart
        // Navigera till confirmation
    }

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
                        <button>Change</button>
                    </div>
                </section>
                <section className="address">
                    <h4>Delivery Address</h4>
                    <div>
                        <p>Sherwood Forest 1</p>
                        <button>Change</button>
                    </div>
                </section>
                <section className="payment">
                    <h4>Payment Method</h4>
                    <div>
                        <p>Apple Pay</p>
                        <button>Change</button>
                    </div>
                </section>
            </section>
            <section className="total-price">
                <p>Total Price</p>
                <p>{order.totalAmount} kr</p>
            </section>

            <Button label={"Place Your Order"} type={"primary"} onClick={placeOrder} />

        </main>
    );
}

export default Checkout;