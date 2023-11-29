import { useState } from "react";
import styles from "./StaffMenuItemCard.module.scss";
import Toggle from "../Toggle";

const StaffMenuItemCard = ({
  name,
  imageUrl,
  available,
  onToggleAvailability
}) => {
  const [isAvailable, setIsAvailable] = useState(available);

  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
    onToggleAvailability(!isAvailable);
  };

  return (
    <article
      className={`${styles.menuItem} ${isAvailable ? "" : styles.unavailable}`}
    >
      <img src={imageUrl} alt={name} className={styles.image} />

      <p className={styles.name}>{name}</p>
      <div className={styles.availabilityContainer}>
        <span>Available</span>
        <Toggle isOn={isAvailable} onToggle={toggleAvailability} />
      </div>
    </article>
  );
};

export default StaffMenuItemCard;
