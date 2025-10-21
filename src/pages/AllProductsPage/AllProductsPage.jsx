import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AllProductsPage.module.css";

const AllProductsPage = () => {
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [sortBy, setSortBy] = useState("default");

  const handleMapClick = () => {
    window.open(
      "https://maps.google.com/?q=Linkstraße+2,+10785+Berlin,+Germany",
      "_blank"
    );
  };

  const allProducts = [
    {
      id: 1,
      name: "Secateurs",
      price: 199,
      originalPrice: 240,
      discount: 17,
      image: "/Garden_Shop/images/Secateurs.png",
    },
    {
      id: 2,
      name: "Collection for berries(plastic)",
      price: 26,
      originalPrice: 35,
      discount: 26,
      image: "/Garden_Shop/images/Collection.png",
    },
    {
      id: 3,
      name: "Gloves (black)",
      price: 9,
      originalPrice: 14,
      discount: 36,
      image: "/Garden_Shop/images/Gloves.png",
    },
    {
      id: 4,
      name: "Sickle-shaped hacksaw",
      price: 155,
      image: "/Garden_Shop/images/Sickle-shaped.png",
    },
    {
      id: 5,
      name: "Bayonet shovel",
      price: 180,
      image: "/Garden_Shop/images/Bayonet.png",
    },
    {
      id: 6,
      name: "Garden pitchfork",
      price: 179,
      image: "/Garden_Shop/images/Garden.png",
    },
    {
      id: 7,
      name: "Barbell",
      price: 12,
      image: "/Garden_Shop/images/Barbell.png",
    },
    {
      id: 8,
      name: "Souvenir thermometer",
      price: 98,
      originalPrice: 120,
      discount: 18,
      image: "/Garden_Shop/images/Souvenir.png",
    },
    {
      id: 9,
      name: "Decorative forged brid...",
      price: 500,
      originalPrice: 1000,
      discount: 50,
      image: "/Garden_Shop/images/Decorative.png",
    },
    {
      id: 10,
      name: "Flower basket",
      price: 100,
      originalPrice: 150,
      discount: 34,
      image: "/Garden_Shop/images/Flower.png",
    },
    {
      id: 11,
      name: "Aquarium lock",
      price: 150,
      originalPrice: 200,
      discount: 25,
      image: "/Garden_Shop/images/Aquarium.png",
    },
  ];

  const handleAddToCart = (productId) => {
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <img
            src="/Garden_Shop/images/logo.svg"
            alt=" Logo"
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
        <Link to="/" className={styles.breadcrumbLink}>
          Main page
        </Link>
        <div className={styles.dividerBreadCrumbs}></div>
        <span className={styles.breadcrumbActive}>All Products</span>
      </nav>

      <section className={styles.productsSection}>
        <div className={styles.productHeader}>
          <h1 className={styles.pageTitle}>All products</h1>
          
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
              <label className={styles.checkboxLabel}>
                <span className={styles.checkboxText}>Discounted items</span>
                <input type="checkbox" className={styles.checkbox} />
              </label>
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
          {allProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              {product.discount && (
                <div className={styles.discountBadge}>
                  -{product.discount}%
                </div>
              )}
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
              />
              <h3 className={styles.productName}>{product.name}</h3>
              <div className={styles.priceContainer}>
                {product.originalPrice ? (
                  <>
                    <span className={styles.currentPrice}>
                      ${product.price}
                    </span>
                    <span className={styles.originalPrice}>
                      ${product.originalPrice}
                    </span>
                  </>
                ) : (
                  <span className={styles.currentPrice}>
                    ${product.price}
                  </span>
                )}
              </div>
            </div>
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
              Linkstraße 2, 8 OG,
              <br />
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
            <button className={styles.mapButton}>View on Google Maps</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProductsPage;