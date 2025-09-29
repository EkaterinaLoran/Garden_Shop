import React from 'react';
import styles from './NavMenu.module.css';
import App from '../DiscountBanner/DiscountBanner';

const NavMenu = () => {
    const menuItems = ['Main Page', 'Categories', 'All products', 'All sales'];

    return (
        <nav className={styles.navMenu}>
            <ul>
                {menuItems.map((item) => 
                <li key={item}>
                    <a href="#" className={styles.navLink}>{item}</a>
                </li>
                )}
            </ul>
        </nav>
    );
};


export default App;