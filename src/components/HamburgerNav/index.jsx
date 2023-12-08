import styles from "./hamburgerNav.module.scss";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

function HamburgerNav({ isVisible, setIsVisible }) {
  const navigationItems = useSelector((state) => state.navigation);

  const navVariants = {
    hidden: {
      x: "-100%",
    },
    visible: {
      x: "0",
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      x: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  function closeHamburgerNav() {
    setIsVisible(!isVisible);
  }

  const renderedOptions = navigationItems.map(({ label, path }) => {
    return (
      <li key={path} onClick={closeHamburgerNav}>
        <NavLink to={path}>{label}</NavLink>
      </li>
    );
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className={styles.overlayShadow}
            onClick={closeHamburgerNav}
            key={"overlayKey"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          ></motion.div>
          <motion.nav
            className={styles.hamburgerNav}
            variants={navVariants}
            key={"navKey"}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className={styles.iconClose} onClick={closeHamburgerNav}>
              <i
                className="fa-regular fa-circle-xmark iconClose"
                onClick={closeHamburgerNav}
                title="Close Navigation"
              ></i>
            </div>
            {renderedOptions}
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

export default HamburgerNav;
