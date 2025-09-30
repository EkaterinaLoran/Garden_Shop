import React from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import DiscountBanner from "./DiscountBanner";
import NavMenu from "./NavMenu";
import HeartIcon from "./Icons/HeartIcon";
import CartIcon from "./Icons/CartIcon";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <Logo />
        <ThemeToggle />
      </div>
      <DiscountBanner />
      <div className={styles.headerBottom}>
        <NavMenu />
        <div className={styles.headerIcons}>
          <a href="#" className={styles.iconLink}>
            <HeartIcon />
          </a>
          <a href="#" className={styles.iconLink}>
            <CartIcon />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;