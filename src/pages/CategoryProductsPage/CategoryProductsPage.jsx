import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./CategoryProductsPage.module.css";

const CategoryProductsPage = () => {
  const { categoryId } = useParams();
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [sortBy, setSortBy] = useState("default");

  const handleMapClick = () => {
    window.open(
      "https://maps.google.com/?q=Linkstraße+2,+10785+Berlin,+Germany",
      "_blank"
    );
  };
  const products = [
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
  ];

  const filteredProducts = products
    .filter((product) => {
      const priceInRange =
        (!priceRange.min || product.price >= Number(priceRange.min)) &&
        (!priceRange.max || product.price <= Number(priceRange.max));

      const discountFilter = !showDiscounted || product.discount;

      return priceInRange && discountFilter;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        case "discount":
          return (b.discount || 0) - (a.discount || 0);
        default:
          return 0;
      }
    });

  const handleAddToCart = (productId) => {
    console.log(`Added product ${productId} to cart`);
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
        <Link to="/" className={styles.breadcrumbLink}>
          Main page
        </Link>
        <div className={styles.dividerBreadCrumbs}></div>
        <Link to="categories" className={styles.breadcrumbLink}>Categories</Link>
        <div className={styles.dividerBreadCrumbs}></div>
        <Link to="tools and equipment" className={styles.breadcrumbActiveTools}>Tools and equipment</Link>
      </nav>

      <section className={styles.productsSection}>
        <div className={styles.productHeader}>
          <h3 className={styles.pageTitle}>Tools and equipment</h3>

          <aside className={styles.sidebar}>
            <h3 className={styles.filterTitle}>Price</h3>
            <div className={styles.priceInputs}>
              <input
                type="number"
                placeholder="From"
                value={priceRange.min}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, min: e.target.value })
                }
                className={styles.priceInput}
              />
              <input
                type="number"
                placeholder="To"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, max: e.target.value })
                }
                className={styles.priceInput}
              />
            </div>

            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={showDiscounted}
                  onChange={(e) => setShowDiscounted(e.target.checked)}
                  className={styles.checkbox}
                />
                Discounted items
              </label>
            </div>

            <h3 className={styles.filterTitle}>Sorted by</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={styles.sortSelect}
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A-Z</option>
              <option value="discount">Discount</option>
            </select>
          </aside>

          <div className={styles.productsGrid}>
            {filteredProducts.map((product) => (
              <Link
                to={`/Garden_Shop/product/${product.id}`}
                key={product.id}
                className={styles.productLink}
              >
                <div className={styles.productCard}>
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
                  <button
                    className={styles.addToCartButton}
                    onClick={() => handleAddToCart(product.id)}
                  >
                    Add to cart
                  </button>
                </div>
              </Link>
            ))}
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

export default CategoryProductsPage;
