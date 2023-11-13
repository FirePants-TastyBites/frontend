import styles from "./button.module.scss";

const Button = ({ label, type, onClick }) => {
  const buttonType = type === "primary" ? styles.primary : styles.secondary;

  return (
    <button className={`${styles.button} ${buttonType}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
