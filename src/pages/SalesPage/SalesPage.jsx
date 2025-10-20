import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SalesPage.module.css';

const SalesPage = () => {
    const [sortBy, setSortBy] = useState('default');

    const discountedProducts = [
        {
            id: 1,
            name: "Secateurs",
            price: 199,
            originalPrice: 240,
            discount: 17,
            image: "/Garden_Shop/images/Secateurs.png"
        },
        {
            id: 2,
            name: "Collection for berries (plastic)",
            price: 26,
            originalPrice: 35,
            discount: 26,
            image: "/Garden_Shop/images/Collection.png"
        },
        {
            id: 3,
            name: "Gloves (black)",
            price: 9,
            originalPrice: 14,
            discount: 36,
            image: "/Garden_Shop/images/Gloves.png"
        },
        {
            id: 4,
            name: "Souvenir thermometer",
            price: 98,
            originalPrice: 120,
            discount: 18,
            image: "/Garden_Shop/images/Souvenir.png"
        },
        {
            id: 5,
            name: "Decorative forged brid...",
            price: 500,
            originalPrice: 1000,
            discount: 50,
            image: "/Garden_Shop/images/Decorative.png"
        },
        {
            id: 6,
            name: "Flower basket",
            price: 100,
            originalPrice: 150,
            discount: 34,
            image: "/Garden_Shop/images/Flower.png",
        },
        {
            id: 7,
            name: "Aquarium lock",
            price: 150,
            originalPrice: 200,
            discount: 25,
            image: "/Garden_Shop/images/Aquarium.png",
        }
    ];

    const sortedProducts = [...discountedProducts].sort((a, b) => {
        switch (sortBy) {
            case 'discount-high':
                return b.discount - a.discount;
            case 'discount-low':
                return a.discount - b.discount;
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'name':
                return a.name.localeCompare(b.name);
            default:
                return 0;
        }
    });

    const handleAddToCart = (productId) => {
        console.log(`Added product ${productId} to cart`);
    };

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
            
                    <Link to="/Garden_Shop/cart" className={styles.cartButton}>
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
                <span className={styles.breadcrumbActive}>All sales</span>
            </nav>

            <section className={styles.productsSection}>
              <div className={styles.productHeader}>
                <h1 className={styles.pageTitle}>Discounted items</h1>
                
                <div className={styles.filtersContainer}>
                  <div className={styles.filterGroup}>
                    <span className={styles.filterLabel}>Price</span>
                    <div className={styles.priceInputs}>
                      <input 
                        type="number" 
                        placeholder="from" 
                        className={styles.priceInput}
                      />
                      <input 
                        type="number" 
                        placeholder="to" 
                        className={styles.priceInput}
                      />
                    </div>
                  </div>
            
                
            
                  <div className={styles.filterGroup}>
                    <span className={styles.filterLabel}>Sorted</span>
                    <select 
                                                    value={sortBy} 
                                                    onChange={(e) => setSortBy(e.target.value)}
                                                    className={styles.sortSelect}
                                                >
                                                    <option value="default">by default</option>
                                                    <option value="discount-high">discount: High to Low</option>
                                                    <option value="discount-low">discount: Low to High</option>
                                                    <option value="price-low">price: Low to High</option>
                                                    <option value="price-high">price: High to Low</option>
                                                    <option value="name">name A-Z</option>
                    </select>
                  </div>
                </div>
              </div>
            

                    <div className={styles.productsGrid}>
                        {sortedProducts.map((product) => (
                            <Link 
                                to={`/Garden_Shop/product/${product.id}`} 
                                key={product.id} 
                                className={styles.productLink}
                            >
                                <div className={styles.productCard}>
                                    <div className={styles.discountBadge}>-{product.discount}%</div>
                                    <img 
                                        src={product.image} 
                                        alt={product.name}
                                        className={styles.productImage}
                                    />
                                    <h3 className={styles.productName}>{product.name}</h3>
                                    <div className={styles.priceContainer}>
                                        <span className={styles.currentPrice}>${product.price}</span>
                                        <span className={styles.originalPrice}>${product.originalPrice}</span>
                                    </div>
                                    {/* <button 
                                        className={styles.addToCartButton}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handleAddToCart(product.id);
                                        }}
                                    >
                                        Add to cart
      </button> */}
                                </div>
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
                        <button className={styles.mapButton} onClick={handleMapClick}>
                            View on Google Maps
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SalesPage;










// import React from "react";
// import styles from "./SalesPage.module.css";

// const SalesPage = () => {
//     const [sortBy, setSortBy] = useState('default');

//      const discountedProducts = [
//         {
//             id: 1,
//             name: "Secateurs",
//             price: 199,
//             originalPrice: 240,
//             discount: 17,
//             image: "/Garden_Shop/images/Secateurs.png"

//         },
//          {
//             id: 2,
//             name: "Collection for berries (plastic)",
//             price: 26,
//             originalPrice: 35,
//             discount: 26,
//             image: "/Garden_Shop/images/Collection.png"
//         },
//         {
//             id: 3,
//             name: "Gloves (black)",
//             price: 9,
//             originalPrice: 14,
//             discount: 36,
//             image: "/Garden_Shop/images/Gloves.png"
//         },
//          {
//             id: 4,
//             name: "Souvenir thermometer",
//             price: 98,
//             originalPrice: 120,
//             discount: 18,
//             image: "/Garden_Shop/images/Souvenir.png"
//         },
//         {
//             id: 5,
//       name: "Decorative forged brid...",
//       price: 500,
//       originalPrice: 1000,
//       discount: 50,
//       image: "/Garden_Shop/images/Decorative.png"
//         },
//         {
//       id: 6,
//       name: "Flower basket",
//       price: 100,
//       originalPrice: 150,
//       discount: 34,
//       image: "/Garden_Shop/images/Flower.png",
//     },
//     {
//       id: 7,
//       name: "Aquarium lock",
//       price: 150,
//       originalPrice: 200,
//       discount: 25,
//       image: "/Garden_Shop/images/Aquarium.png",
//     }
//      ];

//      const sortedProducts = [...discountedProducts].sort((a, b) => {
//         switch (sortBy) {
//             case 'discount-high':
//                 return b.discount - a.discount;
//             case 'discount-low':
//                 return a.discount - b.discount;
//             case 'price-low':
//                 return a.price - b.price;
//             case 'price-high':
//                 return b.price - a.price;
//             case 'name':
//                 return a.name.localeCompare(b.name);
//             default:
//                 return 0;
//         }
//     });

//     const handleAddToCart = (productId) => {
//         console.log(`Added product ${productId} to cart`);
//     };

//     const handleMapClick = () => {
//         window.open('https://maps.google.com/?q=Linkstraße+2,+10785+Berlin,+Germany', '_blank');
//     };
// }
//      return (

//     <div className={styles.container}>
//       <header className={styles.header}>
//         <div className={styles.headerContainer}>
//           <img
//             src="/Garden_Shop/images/logo.svg"
//             alt="Garden Shop Logo"
//             className={styles.logo}
//           />

//           <nav className={styles.navigation}>
//             <a href="#" className={styles.navItem}>
//               Main Page
//             </a>
//             <a href="#" className={styles.navItem}>
//               Categories
//             </a>
//             <a href="#" className={styles.navItem}>
//               All products
//             </a>
//             <a href="#" className={`${styles.navItem} ${styles.sales}`}>
//               All sales
//             </a>
//           </nav>

//           <Link to="/Garden_Shop/cart" className={styles.cartButton}>
//             <img
//               src="/Garden_Shop/images/icon.png"
//               alt="Cart"
//               className={styles.cartIcon}
//             />
//             <span className={styles.cartCount}>0</span>
//           </Link>
//         </div>
//         <div className={styles.divider}></div>
//       </header>

//       <nav className={styles.breadcrumbs}>
//                 <Link to="/" className={styles.breadcrumbLink}>Main page</Link>
//                 <div className={styles.dividerBreadCrumbs}></div>
//                 <span className={styles.breadcrumbActive}>All sales</span>
//             </nav>

//             <div className={styles.mainContent}>
//                 <section className={styles.productsSection}>
//                     <div className={styles.sectionHeader}>
//                         <h1 className={styles.pageTitle}>All sales</h1>
//                         <div className={styles.sortContainer}>
//                             <span className={styles.sortLabel}>Sorted by:</span>
//                             <select 
//                                 value={sortBy} 
//                                 onChange={(e) => setSortBy(e.target.value)}
//                                 className={styles.sortSelect}
//                             >
//                                 <option value="default">Default</option>
//                                 <option value="discount-high">Discount: High to Low</option>
//                                 <option value="discount-low">Discount: Low to High</option>
//                                 <option value="price-low">Price: Low to High</option>
//                                 <option value="price-high">Price: High to Low</option>
//                                 <option value="name">Name A-Z</option>
//                             </select>
//                         </div>
//                     </div>

//                     <div className={styles.productsGrid}>
//                         {sortedProducts.map((product) => (
//                             <Link 
//                                 to={`/Garden_Shop/product/${product.id}`} 
//                                 key={product.id} 
//                                 className={styles.productLink}
//                             >
//                                 <div className={styles.productCard}>
//                                     <div className={styles.discountBadge}>-{product.discount}%</div>
//                                     <img 
//                                         src={product.image} 
//                                         alt={product.name}
//                                         className={styles.productImage}
//                                     />
//                                     <h3 className={styles.productName}>{product.name}</h3>
//                                     <div className={styles.priceContainer}>
//                                         <span className={styles.currentPrice}>${product.price}</span>
//                                         <span className={styles.originalPrice}>${product.originalPrice}</span>
//                                     </div>
//                                     <button 
//                                         className={styles.addToCartButton}
//                                         onClick={(e) => {
//                                             e.preventDefault();
//                                             e.stopPropagation();
//                                             handleAddToCart(product.id);
//                                         }}
//                                     >
//                                         Add to cart
//                                     </button>
//                                 </div>
//                             </Link>
//                         ))}
//                     </div>
//                 </section>
//             </div>
    
//     <section className={styles.contactSection}>
//             <h2 className={styles.contactTitle}>Contact</h2>
    
//             <div className={styles.contactGrid}>
//               <div className={styles.contactItem}>
//                 <h3 className={styles.contactSubtitle}>Phone</h3>
//                 <p className={styles.contactText}>+49 999 999 99 99</p>
//               </div>
    
//               <div className={styles.contactItem}>
//                 <h3 className={styles.contactSubtitle}>Socials</h3>
//                 <div className={styles.socialIcons}>
//                   <a href="#" className={styles.socialLink}>
//                     <i className="fab fa-instagram"></i>
//                   </a>
    
//                   <a href="#" className={styles.socialLink}>
//                     <i className="fab fa-whatsapp"></i>
//                   </a>
//                 </div>
//               </div>
    
//               <div className={styles.contactItem}>
//                 <h3 className={styles.contactSubtitle}>Address</h3>
//                 <p className={styles.contactText}>
//                   Linkstraße 2, 8 OG,
//                   <br />
//                   10785, Berlin, Deutschland
//                 </p>
//               </div>
    
//               <div className={styles.contactItem}>
//                 <div className={styles.workingHoursContainer}>
//                   <h3 className={styles.contactSubtitle}>Working Hours</h3>
//                   <p className={styles.hours}>24 hours a day</p>
//                 </div>
//               </div>
//             </div>
//           </section>
    
//           <section className={styles.mapSection}>
//             <div className={styles.mapContainer}>
//               <img
//                 src="/Garden_Shop/images/map.png"
//                 alt="Location map"
//                 className={styles.mapImage}
//                 onClick={handleMapClick}
//               />
//               <div className={styles.mapOverlay}>
//                 <button className={styles.mapButton}>View on Google Maps</button>
//               </div>
//             </div>
//           </section>
//         </div>
//       );
//     }

//     export default SalesPage;


