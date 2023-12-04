import { motion } from "framer-motion";
import "./TabButtons.scss";

const buttonVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 }
};

const TabButtons = ({ tabs, activeTab, onClick, caption }) => {
  return (
    <section className="buttons-container">
      <p>{caption}</p>
      <nav>
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active " + tab.id : ""}`}
            onClick={() => onClick(tab.id)}
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
          >
            {tab.label}
          </motion.button>
        ))}
      </nav>
    </section>
  );
};

export default TabButtons;
