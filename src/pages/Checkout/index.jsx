import { useNavigate } from "react-router-dom";
import GreenLine from "../../components/GreenLine";
import Button from "../../components/Button";
import './Checkout.scss';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetOrder } from "../../store/orderSlice";
import { animate } from "framer-motion";

function Checkout() {
    const order = useSelector(state => state.order);
    let isLocked = order.isLocked;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function placeOrder() {
        // skicka order till databas och invänta svar 
        // om allt gick bra => lagra i location.state och navigera till confirmation
        
        const response = {
            comment: "",
            createdAt: "2023-11-29T11:24:31.747Z",
            orderId:"wcl01KagFKBpNM3TyrsTw",
            orderItems: [
                {
                    qty: 1,
                    itemName: 'Cheesy Rainbow Veggie Wrap'
                },
                {
                    qty: 1,
                    itemName: "Mediterranean Delight"
                }
            ],
            totalAmount: 200,
            status: 'pending',
            isLocked: false
        }

        await animate(".checkout", { x: ["0%", "-100%"], opacity: [1, 0]});
        navigate(`/confirmation/${order.orderId}`, { state: response });
        dispatch(resetOrder());

        // annars => navigera till errorPage?

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