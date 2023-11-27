import styles from './orderItem.module.scss';

function OrderItem({ qty, itemName, price }) {
    return (
        <li className={styles.orderItem}>
            <div className={styles.qty}>
                <p>{qty ? qty : 1}</p>
                <button>+</button>
                <button>-</button>
            </div>
            <div>{itemName}</div>
            <div className={styles.price}>{price} kr</div>
        </li>
    );
}

export default OrderItem;