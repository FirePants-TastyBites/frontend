import GreenLine from "../../components/GreenLine";
import OrderItem from "../../components/OrderItem";
import Button from '../../components/Button';
import './Cart.scss';
import { useSelector } from "react-redux";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

function Cart() {
    const navigate = useNavigate();
    const orderItems = useSelector(state => state.cart);
    const totalPrice = orderItems.reduce((total, item) => total + item.price, 0);
    const [comment, setComment] = useState('');

    function createOrder() {

        const order = {
            orderId: nanoid(),
            userId: 'guest',
            totalAmount: totalPrice,
            deliveryTime: new Date(Date.now()),
            orderItems,
            comment
        }

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
                        <section className="details">
                            {orderItems.map((item, i) => <OrderItem key={i} item={item} />)}
                            <div className="total-price">
                                <p>Total Price</p>
                                <p>{totalPrice} kr</p>
                            </div>
                            <section className="comment">
                                <p>We're here to cater to your needs! Add allergies or dietary requests below:</p>
                                <textarea onChange={e => setComment(e.target.value)} value={comment}></textarea>
                            </section>
                        </section>
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