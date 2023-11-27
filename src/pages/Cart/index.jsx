import GreenLine from "../../components/GreenLine";
import OrderItem from "../../components/OrderItem";
import Button from '../../components/Button';
import { useDispatch, useSelector } from "react-redux";
import { addItem, getTotalPrice, removeItem } from "../../store/cartSlice";

function Cart() {
    const orderItems = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const totalPrice = orderItems.reduce((total, item) => total + item.price, 0);
    console.log(orderItems);
    
    
    const cartDetails = orderItems.length > 0 ? 
        orderItems.map((item, i) => <OrderItem key={i} {...item} />) 
        :
        orderItems.length; 


    return (
        <main className="cart">
            <header>
                <h1>Cart</h1>
                <GreenLine />
            </header>
            <section className="details">
                {cartDetails}
                <p>Total Price {totalPrice}</p>
            </section>
            <Button label={"Continue to Checkout"} type={"primary"} onClick={() => console.log('clicked')}/>
        </main>
    );
}

export default Cart;