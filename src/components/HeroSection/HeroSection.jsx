import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <img 
                className={styles.image}
                src="/Garden_Shop/images/HeroSection.jpg"
                alt="Garden products" 
            />
            <div className={styles.heroContent}>
                <h1 className={styles.title}>
                    Amazing Discounts 
                    on Garden Products!
                </h1>
                <a href="#" className={styles.button}>
                    Check out
                </a>
            </div>
        </section>
    );
};

export default HeroSection; 