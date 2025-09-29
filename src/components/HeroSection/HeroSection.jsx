import HeroSection from '../components/HeroSection/Herosection.jsx';
import App from '../layout/Header/Header.jsx';
import styles from './HeroSection.module.css';


const Herosection = () => {
    return (
        <section className="hero_section">
            <img className="image"src="./public/images/HeroSection.jpg" alt="HeroSection" />
        <div className="hero_content">
            <h1 className="title">Amazing Discounts
                on Garden Products!
            </h1>
            <a href="#" className="button_btn">Check out</a>
        </div>
        </section>
    );
};

export default App;