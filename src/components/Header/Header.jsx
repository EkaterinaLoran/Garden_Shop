import React from 'react'; 
import { Link } from 'react-router-dom';   
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
          <Link to="/Garden_Shop" className={styles.navItem}>Main Page</Link>
          <Link to="/Garden_Shop/Categories" className={styles.navItem}>Categories</Link>
          <Link to="/Garden_Shop/products" className={styles.navItem}>All products</Link>
          <Link to="/Garden_Shop/sales" className={`${styles.navItem} ${styles.sales}`}>All sales</Link>
        </nav>

        <button className={styles.cartButton}>
          <img 
            src="/Garden_Shop/images/icon.png" 
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































