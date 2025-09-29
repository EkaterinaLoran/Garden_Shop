import React from 'react';
import Logo from "../assert/logo.svg"
import styles from './logo.module.css';
import App from '../DiscountBanner/DiscountBanner';

const Logo = () => {
return (
    <div className={styles.logo}>
        <img src="/images/logo.svg" alt="logo" />
    </div>
);
};

export default App;