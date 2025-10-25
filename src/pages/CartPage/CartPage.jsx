import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Secateurs",
      price: 155,
      originalPrice: 240,
      quantity: 1,
      image: "/Garden_Shop/images/Secateurs.png",
    },
    {
      id: 2,
      name: "Collection for berries (plastic)",
      price: 26,
      originalPrice: 35,
      quantity: 1,
      image: "/Garden_Shop/images/Collection.png",
    },
    {
      id: 5,
      name: "Bayonet shovel",
      price: 180,
      quantity: 2,
      image: "/Garden_Shop/images/Bayonet.png",
    },
  ]);

  const [orderForm, setOrderForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", { orderForm, cartItems });

    setShowSuccessModal(true);

    setCartItems([]);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleMapClick = () => {
    window.open(
      "https://maps.google.com/?q=Linkstraße+2,+10785+Berlin,+Germany",
      "_blank"
    );
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
            <span className={styles.cartCount}>{totalItems}</span>
          </Link>
        </div>
        <div className={styles.divider}></div>
      </header>

      <section className={styles.cartSection}>
        <div className={styles.cartHeader}>
          <h2 className={styles.cartTitle}>Shopping cart</h2>
        </div>
        <div className={styles.divider}></div>
        <button className={styles.storeBtn}>Back to the store</button>

        <div className={styles.cartItems}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.itemContent}>
        <img 
          src={item.image} 
          alt={item.name}
          className={styles.itemImage}
        />
        <div className={styles.itemDetails}>
              <div className={styles.itemHeader}>
                <h3 className={styles.itemTitle}>{item.name}</h3>
              </div>
              <div className={styles.itemControls}>
                <div className={styles.quantitySection}>
                  <button
                    className={styles.quantityBtn}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className={styles.quantity}>{item.quantity}</span>
                  <button
                    className={styles.quantityBtn}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className={styles.priceSection}>
                  <span className={styles.currentPrice}>
                    ${item.price * item.quantity}
                  </span>
                  {item.originalPrice && (
                    <span className={styles.originalPrice}>
                      ${item.originalPrice}
                    </span>
                  )}
                </div>
              </div>
              </div>
              </div>
              <div className={styles.divider}></div>
            </div>
          ))}
        </div>

        <div className={styles.orderDetails}>
          <h3 className={styles.orderTitle}>Order details</h3>
          <div className={styles.orderSummary}>
            <div className={styles.orderRow}>
              <span>{totalItems} items</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className={styles.orderTotal}>
              <span>Total</span>
              <span className={styles.totalPrice}>
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <form className={styles.orderForm} onSubmit={handleOrderSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Name"
                className={styles.formInput}
                name="name"
                value={orderForm.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="tel"
                placeholder="Phone number"
                className={styles.formInput}
                name="phone"
                value={orderForm.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                placeholder="Email"
                className={styles.formInput}
                name="email"
                value={orderForm.email}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className={styles.orderButton}>
              Order
            </button>
          </form>
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

      {showSuccessModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Congratulations!</h2>
            </div>
            <div className={styles.modalBody}>
              <p className={styles.modalText}>
                Your order has been successfully placed on the website.
                <br />A manager will contact you shortly to confirm your order.
              </p>
              <div className={styles.orderSummaryModal}>
                <h3 className={styles.summaryTitle}>Order Summary:</h3>
                <div className={styles.summaryItems}>
                  <div className={styles.summaryItem}>
                    <span>Secateurs</span>
                    <span>- 1 +</span>
                  </div>
                  <div className={styles.summaryItem}>
                    <span>Collection for berries (plastic)</span>
                    <span>- 1 + $26 $35</span>
                  </div>
                  <div className={styles.summaryItem}>
                    <span>Bayonet shovel</span>
                    <span>- 2 + $360</span>
                  </div>
                </div>
                <div className={styles.modalTotal}>
                  <span>Total:</span>
                  <span className={styles.modalTotalPrice}>$541,00</span>
                </div>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button
                className={styles.modalCloseBtn}
                onClick={closeSuccessModal}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

