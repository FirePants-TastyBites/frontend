import { useDispatch } from 'react-redux';
import styles from './orderItem.module.scss';
import { removeItem } from '../../store/cartSlice';

function OrderItem({id, itemName, price, qty }) {
    const dispatch = useDispatch();

    return (
        <li className={styles.orderItem}>
            <div className={styles.qty}>
                <p>{qty}</p>
                <button onClick={() => dispatch(removeItem(id))}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
            <div>{itemName}</div>
            <div className={styles.price}>{price} kr</div>
        </li>
    );
}

export default OrderItem;