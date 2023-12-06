import DetailsButton from "../DetailsButton";
import styles from './orderHistoryItem.module.scss';

function OrderHistoryItem({ order }) {
    const { id, createdAt, cart, totalPrice } = order;
    return (
        <li className={styles.item}>
            <h4> Order {id}</h4>
            <div>
                <p>{createdAt.split('T')[0]}</p>
                <DetailsButton >View details</DetailsButton>
            </div>
        </li>
    );
}

export default OrderHistoryItem;