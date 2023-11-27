import GreenLine from "../../components/GreenLine";
import OrderItem from "../../components/OrderItem";
import Button from '../../components/Button';
import './Cart.scss';
import { useSelector } from "react-redux";
import { useState } from "react";

function Cart() {
    const orderItems = useSelector(state => state.cart);
    const totalPrice = orderItems.reduce((total, item) => total + item.price, 0);
    const [comment, setComment] = useState('');

    function placeOrder() {

        const order = {
           userId: 'dummy@data.com',
           totalAmount: totalPrice,
           deliveryTime: new Date(Date.now()).toDateString(),
           orderItems,
           comment
        }

        console.log(order);
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
                        {orderItems.map((item, i) => <OrderItem key={i} {...item} />)}
                        <div className="total-price">
                            <p>Total Price</p>
                            <p>{totalPrice} kr</p>
                        </div>
                        <section className="comment">
                            <p>We're here to cater to your needs! Add allergies or dietary requests below:</p>
                            <textarea onChange={e => setComment(e.target.value)} value={comment}></textarea>
                        </section>
                    </section>
                    <a href="/checkout">
                        <Button label={"Go to Checkout"} type={"primary"} onClick={placeOrder} />
                    </a>
                </>
                :
                <>
                    <p>Your cart is empty!</p>
                    <a href="/menu">
                        <Button label={"Show Menu"} type={"primary"} />
                    </a>
                </>
            }
        </main>
    );
}

export default Cart;