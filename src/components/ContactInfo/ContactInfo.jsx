import React from 'react';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
    return (
        <section className={styles.contactSection}>
            <h2 className={styles.contactTitle}>Contact</h2>
            
            <div className={styles.contactGrid}>
                <div className={styles.contactItem}>
                    <h3 className={styles.contactSubtitle}>Phone</h3>
                    <p className={styles.contactText}>+49 999 999 99 99</p>
                </div>

                 <div className={styles.contactItem}>
                    <h3 className={styles.contactSubtitle}>Socials</h3>
                    <p className={styles.contactText}>
                    
                    </p>
                </div>
                
                <div className={styles.contactItem}>
                    <h3 className={styles.contactSubtitle}>Address</h3>
                    <p className={styles.contactText}>
                        Linkstraße 2, 8 OG,<br />
                        10785, Berlin, Deutschland
                    </p>
                </div>
                
                <div className={styles.contactItem}>
                    <h3 className={styles.contactSubtitle}>Socials</h3>
                    <div className={styles.socialsContainer}>
                        <p className={styles.workingHours}>Working Hours</p>
                        <p className={styles.hours}>24 hours a day</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;