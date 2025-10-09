import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoriesPage.module.css';

const CategoriesPage = () => {
    const handleMapClick = () => {
        window.open('https://maps.google.com/?q=Linkstraße+2,+10785+Berlin,+Germany', '_blank');
    };

    const categories = [
        {
            id: 1,
            title: "Fertilizer",
            image: "/Garden_Shop/images/Fertilizer.png"
        },
        {
            id: 2,
            title: "Protective products and septic tanks",
            image: "/Garden_Shop/images/Protective.png"
        },
        {
            id: 3,
            title: "Planting material",
            image: "/Garden_Shop/images/Planting.png"
        },
        {
            id: 4,
            title: "Tools and equipment",
            image: "/Garden_Shop/images/Tools.png"
        },
        {
            id: 5,
            title: "Pots and planters",
            image: "/Garden_Shop/images/Pots.png"
        }
    ];

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
                             <Link to="/Garden_Shop" className={styles.navItem}>
                               Main Page
                             </Link>
                             <Link to="/Garden_Shop/Categories" className={styles.navItem}>
                               Categories
                             </Link>
                             <Link to="/Garden_Shop/products" className={styles.navItem}>
                               All products
                             </Link>
                             <Link
                               to="/Garden_Shop/sales"
                               className={`${styles.navItem} ${styles.sales}`}
                             >
                               All sales
                             </Link>
                           </nav>
            
                    <Link to="/Garden_Shop/cart"className={styles.cartButton}>
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

            <nav className={styles.breadcrumbs}>
                <Link to="/" className={styles.breadcrumbLink}>Main page</Link>
                 <div className={styles.dividerBreadCrumbs}></div>
                <span className={styles.breadcrumbActive}>Categories</span>
            </nav>

            <section className={styles.categoriesSection}>
                <div className={styles.categoriesHeader}>
                    <h2 className={styles.title}>Categories</h2>
                </div>
                <div className={styles.categories}>
                    {categories.map((category) => (
                        <Link key={category.id} to={`/category/${category.id}`}  className={styles.categoryItem}>
                            <img className={styles.categoryImage} src={category.image} alt={category.title} />
                            <h3 className={styles.categoryTitle}>{category.title}</h3>
                        </Link>
                    ))}
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
                        <div className={styles.workingHoursContainer}>
                            <h3 className={styles.contactSubtitle}>Working Hours</h3>
                            <p className={styles.hours}>24 hours a day</p>
                        </div> 
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
                        <button className={styles.mapButton}>
                            View on Google Maps
                        </button>
                    </div>
                </div>
            </section>
        </div> 
    );
};

export default CategoriesPage;