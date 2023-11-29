import GreenLine from "../../components/GreenLine";
import OrderItem from "../../components/OrderItem";
import Button from '../../components/Button';
import './Cart.scss';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { motion, animate } from "framer-motion";
import { setOrder } from "../../store/orderSlice";

function Cart() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const orderItems = useSelector(state => state.order.orderItems);
    const totalPrice = orderItems.reduce((total, item) => total + item.price, 0);
    const [comment, setComment] = useState('');

    async function createOrder() {

        const order = {
            userId: 'guest',
            totalAmount: totalPrice,
            orderItems,
            comment
        }

        dispatch(setOrder(order));

        await animate(".cart", { x: ["0%", "-100%"], opacity: [1, 0]});
        navigate('/checkout', { state: order });
    }

    return (
        <main className="cart">
            <header>
                <h1>Cart</h1>
                <GreenLine />
            </header>

            {
                orderItems.length > 0 ?
                    <>
                        <motion.section
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: .3 } }}
                            className="details"
                        >
                            <section className="order-items">
                                {orderItems.map((item, i) => <OrderItem key={i} item={item} />)}
                                <div className="total-price">
                                    <p>Total Price</p>
                                    <p>{totalPrice} kr</p>
                                </div>
                            </section>
                            <section className="comment">
                                <p>We're here to cater to your needs! Add allergies or dietary requests below:</p>
                                <textarea onChange={e => setComment(e.target.value)} value={comment}></textarea>
                            </section>
                        </motion.section>
                        <Button label={"Go to Checkout"} type={"primary"} onClick={createOrder} />

                    </>
                    :
                    <>
                        <p>Your cart is empty!</p>
                        <Button label={"Show Menu"} type={"primary"} onClick={() => navigate('/menu')}/>

                    </>
            }
        </main>
    );
}

export default Cart;