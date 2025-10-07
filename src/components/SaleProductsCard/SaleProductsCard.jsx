import React from 'react';
import styles from './SaleProductsCard.module.css';

const SaleProductsCard = () => {
  const products = [
    { id: 1, 
      name: "Decorative forged brid...", price: 500, 
      originalPrice: 1000,
       discount: -50,
      image: "/Garden_Shop/images/Decorative.png" },
    { id: 2,
       name: "Flower basket",
        price: 100, 
        originalPrice: 150,
         discount: -34,
          image: "/Garden_Shop/images/Flower.png" },
    { id: 3, 
      name: "Aquarium lock",
       price: 150, 
       originalPrice: 200, 
       discount: -25,
        image: "/Garden_Shop/images/Aquarium.png" },
    { id: 4,
       name: "Secateurs", 
       price: 199,
        originalPrice: 240, 
        discount: -17,
         image: "/Garden_Shop/images/Secateurs.png" }
  ];

  return (
    <section className={styles.sale}>
    <div className={styles.saleSection}>
      <div className={styles.saleHeader}>
        <h2 className={styles.saleTitle}>Sale</h2>
        <div className={styles.divider}></div>
        <button className={styles.allSalesBtn}>All sales</button>
      </div>
      <div className={styles.productsGrid}>
        {products.map(product => (
          <div key={product.id} className={styles.saleProductCard}>
            <div className={styles.discountBadge}>{product.discount}%</div>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <div className={styles.productInfo}>
              <h4 className={styles.productName}>{product.name}</h4>
              <div className={styles.priceContainer}>
                <span className={styles.currentPrice}>${product.price}</span>
                <span className={styles.originalPrice}>${product.originalPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default SaleProductsCard;



































































// import SaleProductsCard from "./SaleProductsCard.jsx";
// import styles from "./SaleProductsCard.module.css";

// const SaleProductsCard = ({ products }) => {
//   const { name, price, originalPrice, discount, image } = products;

//   return (
//     <div className="sale_products_card">
//       <h3 className="sale">Sale</h3>
//       <button className="all_sales">All sales</button>
//       <div className="discount_badge">{discount}%</div>
//       <img src={image} alt={name} className="products_image" />
//       <div className="product_info">
//         <h4 className="product_name">{name}</h4>
//         <div className="price_container">
//           <span className="current_price">${price}</span>
//           <span className="original_price">${originalPrice}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;