import { useDispatch } from 'react-redux';
import styles from './orderItem.module.scss';
import { addItem, removeItem } from '../../store/cartSlice';

function OrderItem({ item }) {
    const { id, qty, itemName, price } = item;
    const dispatch = useDispatch();

    return (
        <li className={styles.orderItem}>
            <div className={styles.qty}>
                <p>{qty}</p>
            </div>
            <div className={styles.btnContainer}>
                <button onClick={() => dispatch(addItem(item))}>+</button>
                <button onClick={() => dispatch(removeItem(id))}>-</button>
            </div>
            <div>{itemName}</div>
            <div className={styles.price}>{price} kr</div>
        </li>
    );
}

export default OrderItem;