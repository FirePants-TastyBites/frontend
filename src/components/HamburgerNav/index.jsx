import styles from './hamburgerNav.module.scss';

import { NavLink } from "react-router-dom";

function HamburgerNav({ isVisible, setIsVisible }) {

    const options = [
        {
            label: "Home",
            path: '/'
        },
        {
            label: "My Profile",
            path: '/profile',
        },
        {
            label: "Menu",
            path: '/menu'
        },
        {
            label: 'About Us',
            path: '/about'
        }
    ];

    
    function closeHamburgerNav() {
        setIsVisible(!isVisible);
    }
    
    const renderedOptions = options.map(({ label, path }) => {
        return <li key={path} onClick={closeHamburgerNav}><NavLink to={path}>{label}</NavLink></li>
    })

    return isVisible && (        
            <>
                <div className={styles.overlayShadow} onClick={closeHamburgerNav}></div>
                <nav className={styles.hamburgerNav}>
                    <button onClick={closeHamburgerNav}>close</button>
                    {renderedOptions}
                </nav>
            </>
    );
}

export default HamburgerNav;