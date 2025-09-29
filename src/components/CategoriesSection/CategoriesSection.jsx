import CategoriesSection from './CategoriesSection.jsx';
import styles from './CategoriesSection.module.css';

const CategoriesSection = () => {
 
    return (
        <section className="categories_section">
            <div className="categories_content">
                <h2>Categories</h2>
                <button className="categories_btn">All categories</button>
                <img className="images" src="/images/Fertilizer.png" alt="Fertilizer" />
                <img src="/images/Protective.png" alt="Protective" />
                <img src="/images/Planting.png" alt="Plating" />
                <img src="/images/Tools.png" alt="Tools" />
            </div>
        </section>
    )
}