import styles from './detailsButton.module.scss';

function DetailsButton({ children, onClick }) {
    return (  
        <button className={styles.detailsButton} onClick={onClick}>{children}</button>
    );
}

export default DetailsButton;