import styles from "./Toggle.module.scss";

const Toggle = ({ isOn, onToggle }) => {
  return (
    <article
      className={`${styles.toggleSwitch} ${isOn ? "" : styles.off}`}
      onClick={onToggle}
    >
      <div className={`${styles.switch} ${isOn ? "" : styles.off}`}></div>
    </article>
  );
};

export default Toggle;
