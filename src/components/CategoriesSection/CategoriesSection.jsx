import React from "react";
import styles from "./CategoriesSection.module.css";

const CategoriesSection = () => {
  return (
    <section className={styles.categoriesSection}>
      <div className={styles.categoriesHeader}>
        <h2 className={styles.title}>Categories</h2>
        <div className={styles.divider}></div>
        <button className={styles.categoriesBtn}>All categories</button>
      </div>

      <div className={styles.categories}>
        <div className={styles.categoryItem}>
          <img
            className={styles.categoryImage}
            src="/Garden_Shop/images/Fertilizer.png"
            alt="Fertilizer"
          />
          <h3 className={styles.categoryTitle}>Fertilizer</h3>
          {/* <p className={styles.categoryDescription}>Protective products and septic tanks</p>  */}
        </div>

        <div className={styles.categoryItem}>
          <img
            className={styles.categoryImage}
            src=" /Garden_Shop/images/Protective.png"
            alt="Protective"
          />
          <h3 className={styles.categoryTitle}>Protective</h3>
          {/* <p className={styles.categoryDescription}>Protective products</p> */}
        </div>

        <div className={styles.categoryItem}>
          <img
            className={styles.categoryImage}
            src="/Garden_Shop/images/Planting.png"
            alt="Planting"
          />
          <h3 className={styles.categoryTitle}>Planting material</h3>
          {/* <p className={styles.categoryDescription}>Tools and equipment</p> */}
        </div>

        <div className={styles.categoryItem}>
          <img
            className={styles.categoryImage}
            src="/Garden_Shop/images/Tools.png"
            alt="Tools"
          />
          <h3 className={styles.categoryTitle}>Tools</h3>
          {/* <p className={styles.categoryDescription}>Tools and equipment</p> */}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
