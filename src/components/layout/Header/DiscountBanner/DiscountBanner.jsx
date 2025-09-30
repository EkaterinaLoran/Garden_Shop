import React from "react";
import styles from './DiscountBanner.module.css';


const DiscountBanner = () => {
    return (
        <div className={styles.discountBanner}
        >
            <span>1 day discount</span>
        </div>
    );
};

export default DiscountBanner;