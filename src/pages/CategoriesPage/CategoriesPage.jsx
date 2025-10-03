import Header from '../../components/layout/Header/Header';
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import Map from '../../components/Map/Map';
import styles from './CategoriesPage.module.css';

function CategoriesPage() {
    return (
      <div className={styles.CategoriesPage}>
        <Header showCategoryNav={true} />

        <div className={categoryNav}>
            <button className={styles.navButton}>Main Page</button>
            <button className={`${styles.navButton}${styles.active}`}>Categories</button>
      </div>  

    <main className={styles.mainContent}>
        <CategoriesSection />
        <ContactInfo />
    </main>
    </div>
    );

}

export default CategoriesPage;

