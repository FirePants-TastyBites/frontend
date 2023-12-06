import { useState } from "react";
import DetailsButton from "../DetailsButton";
import styles from './orderHistoryItem.module.scss';
import { useDispatch } from "react-redux";
import { addItem } from '../../store/orderSlice';
import { useNavigate } from "react-router-dom";

function OrderHistoryItem({ order }) {
    const [showDetails, setShowDetails] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id, createdAt, cart } = order;
    const date = createdAt.split('T')[0];

    function handleReorder() {
        console.log(cart);
        cart.map(item => dispatch(addItem(item)));
        navigate('/cart');
    }

    return (
        <li className={styles.item}>
            <div>
                <h4> Order {id}</h4>
                <DetailsButton onClick={() => setShowDetails(!showDetails)}>
                    {
                        showDetails ? "Show less" : "Show more"
                    }
                </DetailsButton>
            </div>
            <p>{date}</p>
            {
                showDetails &&
                <section>
                    <ul>
                        {cart.map((item, index) => <li key={index}>{item.qty} {item.title}</li>)}
                    </ul>
                    <button className={styles.reorderBtn} onClick={handleReorder}>Reorder</button>
                </section>
            }
        </li>
    );
}

export default OrderHistoryItem;