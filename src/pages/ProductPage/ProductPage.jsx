import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ProductPage.module.css';

const ProductPage = () => {
    const { productId } = useParams();
    const [quantity, setQuantity] = useState(1);

    const handleMapClick = () => {
        window.open('https://maps.google.com/?q=Linkstraße+2,+10785+Berlin,+Germany', '_blank');
    };
    
const product = {
     id: 1,
     name: "Secateurs",
     price: 199,
     originalPrice: 240,
     discount: 17,
     image: "/Garden_Shop/images/Secateurs.png",
     description: `This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won't be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.
    This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing defects.`
};

  const handleAddToCart = () => {
        console.log(`Added ${quantity} ${product.name} to cart`);
    };

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

    return (
    <div className={styles.container}>
     <header className={styles.header}>
     <div className={styles.headerContainer}>
     <img  src="/Garden_Shop/images/logo.svg"  alt="Garden Shop Logo" className={styles.logo} />
      
      <nav className={styles.navigation}>
     <a href="#" className={styles.navItem}>Main Page</a>
      <a href="#" className={styles.navItem}>Categories</a>
     <a href="#" className={styles.navItem}>All products</a>
     <a href="#" className={`${styles.navItem} ${styles.sales}`}>All sales</a>
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
                             <div className={styles.divider}></div>
                         </header>
              <nav className={styles.breadcrumbs}>
                                      <Link to="/" className={styles.breadcrumbLink}>Main page</Link>
                                       <div className={styles.dividerBreadCrumbs}></div>
                                      <span className={styles.breadcrumbActive}>Categories</span>
                                      <div className={styles.dividerBreadCrumbs}></div>
                                       <span className={styles.breadcrumbActive}>Tools and equipment</span>
                                          <div className={styles.dividerBreadCrumbs}></div>
 <span className={styles.breadcrumbActive}>{product.name}</span>
                                  </nav>
                               
    

<div className={styles.productContent}>
                <div className={styles.productImages}>
                    <img 
                        src={product.image} 
                        alt={product.name}
                        className={styles.mainImage}
                    />
                </div>

                <div className={styles.productInfo}>
                    <h1 className={styles.productTitle}>{product.name}</h1>
                    
                    <div className={styles.priceSection}>
                        <div className={styles.priceContainer}>
                            <span className={styles.currentPrice}>${product.price}</span>
                            {product.originalPrice && (
                                <span className={styles.originalPrice}>${product.originalPrice}</span>
                            )}
                            {product.discount && (
                                <div className={styles.discountBadge}>-{product.discount}%</div>
                            )}
                        </div>
                    </div>

                    <div className={styles.quantitySection}>
                        <div className={styles.quantityControls}>
                            <button className={styles.quantityButton} onClick={decreaseQuantity}>-</button>
                            <span className={styles.quantity}>{quantity}</span>
                            <button className={styles.quantityButton} onClick={increaseQuantity}>+</button>
                        </div>
                        
                        <button className={styles.addToCartButton} onClick={handleAddToCart}>
                            Add to cart
                        </button>
                    </div>

                    <div className={styles.descriptionSection}>
                        <h3 className={styles.descriptionTitle}>Description</h3>
                        <p className={styles.descriptionText}>
                            {product.description}
                        </p>
                        <button className={styles.readMoreButton}>Read more</button>
                    </div>
                </div>
            </div>

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
}

export default ProductPage;            
                                  
