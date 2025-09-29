import SaleProductsCard from "./SaleProductsCard.jsx";
import styles from "./SaleProductsCard.module.css";

const SaleProductsCard = ({ products }) => {
  const { name, price, originalPrice, discount, image } = products;

  return (
    <div className="sale_products_card">
      <h3 className="sale">Sale</h3>
      <button className="all_sales">All sales</button>
      <div className="discount_badge">{discount}%</div>
      <img src={image} alt={name} className="products_image" />
      <div className="product_info">
        <h4 className="product_name">{name}</h4>
        <div className="price_container">
          <span className="current_price">${price}</span>
          <span className="original_price">${originalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default App;
