import { useDispatch } from 'react-redux';
import styles from './orderItem.module.scss';
import { addItem, removeItem } from '../../store/orderSlice';
import { motion } from 'framer-motion';

function OrderItem({ item }) {
    const { id, qty, itemName, price } = item;
    const dispatch = useDispatch();

    return (
        <li className={styles.orderItem}>
            <div className={styles.qty}>
                <p>{qty}</p>
            </div>
            <div className={styles.btnContainer}>
                <motion.button initial={{ color: '#03a864' }} whileTap={{ color: '#FFF' }} onClick={() => dispatch(addItem(item))}>+</motion.button>
                <motion.button initial={{ color: '#03a864' }} whileTap={{ color: '#FFF' }} onClick={() => dispatch(removeItem(id))}>-</motion.button>
            </div>
            <div>{itemName}</div>
            <div className={styles.price}>{price} kr</div>
        </li>
    );
}

export default OrderItem;