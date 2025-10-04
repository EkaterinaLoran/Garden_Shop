import React from 'react';    
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img 
          src="/Garden_Shop/images/logo.svg" 
          alt="Garden Shop Logo" 
          className={styles.logo}
        />
        
        <nav className={styles.navigation}>
          <a href="#" className={styles.navItem}>Main Page</a>
          <a href="#" className={styles.navItem}>Categories</a>
          <a href="#" className={styles.navItem}>All products</a>
          <a href="#" className={`${styles.navItem} ${styles.sales}`}>All sales</a>
        </nav>

        <button className={styles.cartButton}>
          <img 
            src="/Garden_Shop/images/basket-empty.svg" 
            alt="Cart" 
            className={styles.cartIcon}
          />
          <span className={styles.cartCount}>0</span>
        </button>     
      </div>
    </header>
  );
};

export default Header;































