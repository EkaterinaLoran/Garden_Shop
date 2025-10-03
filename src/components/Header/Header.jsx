import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';                                                  
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img src="/Garden_Shop/images/logo.svg" alt="logo" />
        <div className={styles.logo}>
        </div>
        <nav className={styles.navigation}>
          <a href="#" className={styles.navItem}>Main Page</a>
          <a href="#" className={styles.navItem}>Categories</a>
          <a href="#" className={styles.navItem}>All products</a>
          <a href="#" className={`${styles.navItem} ${styles.sales}`}>All sales</a>
        </nav>

        <div className={styles.cartSection}>
          <button className={styles.cartButton}>
            <FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon} />
            <span className={styles.cartCount}>0</span>
            
        
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
































//  import React from "react";
// //  /useState
// import Logo from "./Logo/Logo";
// import NavMenu from "./NavMenu/NavMenu"; 
// import CartIcon from "./CartIcon/CartIcon";
// import styles from "./Header.module.css";

// const Header = () => {
//   return (
//     <header className={styles.header}>
//       <div className={styles.headerContainer}>
//         <div className={styles.logo}>
//         </div>
//         <Logo />
        
//         { <nav className={styles.navigation}>
//           <a href="#" className={styles.navItem}>Main Page</a>
//           <a href="#" className={styles.navItem}>Categories</a>
//           <a href="#" className={styles.navItem}>All products</a>
//           <a href="#" className={`${styles.navItem} ${styles.sales}`}>All sales</a>
//         </nav>
//          }
//       </div>
//     </header>
//   );
// };

// export default Header;