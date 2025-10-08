import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    const handleMapClick = () => {
        window.open('https://maps.google.com/?q=Linkstraße+2,+10785+Berlin,+Germany', '_blank');
    };

    return (

        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <img 
                        src="/Garden_Shop/images/logo.svg" 
                        alt="Garden Shop Logo" 
                        className={styles.logo}
                    />
                    
                    <nav className={styles.navigation}>
                        <Link to="/" className={styles.navItem}>Main Page</Link>
                        <Link to="/categories" className={styles.navItem}>Categories</Link>
                        <Link to="/products" className={styles.navItem}>All products</Link>
                        <Link to="/sales" className={`${styles.navItem} ${styles.sales}`}>All sales</Link>
                    </nav>
            
                    <Link to="/cart" className={styles.cartButton}>
                        <img 
                            src="/Garden_Shop/images/icon.png" 
                            alt="Cart" 
                            className={styles.cartIcon}
                        />
                        <span className={styles.cartCount}>0</span>
                    </Link>     
                </div>
                <div className={styles.divider}></div>
            </header>

            <section className={styles.notFoundSection}>
                <div className={styles.notFoundContent}>
                    <div className={styles.errorImage}>
                        <img 
                            src="/Garden_Shop/images/404.png" 
                            alt="Page Not Found" 
                            className={styles.errorImg}
                        />
                    </div>
                    <div className={styles.errorText}>
                        <h1 className={styles.errorTitle}>Page Not Found</h1>
                        <p className={styles.errorDescription}>
                            We're sorry, the page you requested could not be found.<br />
                            Please go back to the homepage.
                        </p>
                        <Link to="/" className={styles.homeButton}>
                            Go Home
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.contactSection}>
                <h2 className={styles.contactTitle}>Contact</h2>
                <div className={styles.contactGrid}>
                    <div className={styles.contactItem}>
                        <h3 className={styles.contactSubtitle}>Phone</h3>
                        <p className={styles.contactText}>+49 999 999 99 99</p>
                    </div>
                    <div className={styles.contactItem}>
                        <h3 className={styles.contactSubtitle}>Socials</h3>
                        <div className={styles.socialIcons}>
                            <a href="#" className={styles.socialLink}>
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                    <div className={styles.contactItem}>
                        <h3 className={styles.contactSubtitle}>Address</h3>
                        <p className={styles.contactText}>
                            Linkstraße 2, 8 OG,<br />
                            10785, Berlin, Deutschland
                        </p>
                    </div>
                    <div className={styles.contactItem}>
                        <h3 className={styles.contactSubtitle}>Working Hours</h3>
                        <p className={styles.hours}>24 hours a day</p>
                    </div>
                </div>
            </section>

            <section className={styles.mapSection}>
                <div className={styles.mapContainer}>
                    <img 
                        src="/Garden_Shop/images/map.png" 
                        alt="Location map"
                        className={styles.mapImage}
                        onClick={handleMapClick}
                    />
                    <div className={styles.mapOverlay}>
                        <button className={styles.mapButton} onClick={handleMapClick}>
                            View on Google Maps
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFoundPage;

