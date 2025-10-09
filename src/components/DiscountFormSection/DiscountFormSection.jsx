import React from "react";
import styles from "./DiscountFormSection.module.css";

const DiscountFormSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing! 5% discount applied.");
  };

  return (
    <div className={styles.discountSection}>
      <div className={styles.discountHeader}>
        <h3 className={styles.title}>5% off on the first order</h3>
        <div className={styles.discountContent}>
          <img
            className={styles.image}
            src="/Garden_Shop/images/DiscountsForm.png"
            alt="Discount form"
          />
          <form onSubmit={handleSubmit} className={styles.discountForm}>
            <input
              type="text"
              className={styles.input}
              placeholder="Name"
              required
            />
            <input
              type="tel"
              className={styles.input}
              placeholder="Phone number"
              required
            />
            <input
              type="email"
              className={styles.input}
              placeholder="Email"
              required
            />
            <button type="submit" className={styles.submitBtn}>
              Get a discount
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiscountFormSection;

