import React from 'react';
import styles from './DiscountFormSection.module.css';

const DiscountFormSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for subscribing! 5% discount applied.');
    };

    return (
        <div className={styles.discountContent}>
            <h3 className={styles.title}>5% off on the first order</h3>
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
    );
};

export default DiscountFormSection; 



































// import DiscountFormSection from "./DiscountFormSection";
// import styles from "./DiscountFormSection.module.css";

// const DiscountFormSection = () => {
//     const handelSumbit = (e) => {
//         e.preventDefault();
//         alert('Спасибо за подписку! Скидка 5% применена.');
//     };

//     return (
//         <div className="discount_content">
//             <h3>5% off on the first order</h3>
//             <img className="img" src="/images/DiscountsForm.png" alt="DiscountsForm" />
//             <form onSubmit={handelSumbit} className="discount_form">
//                 <input type="text" className="text" placeholder="Name" />
//                 <input  type="tel" className="tel" placeholder="Phone number"/>
//                 <input  type="email" className="email" placeholder="Email"/>
//                 <button type="submit" className="get_btn">Get a discount</button>
//             </form>
//         </div>
//     );
// };

// export default App;