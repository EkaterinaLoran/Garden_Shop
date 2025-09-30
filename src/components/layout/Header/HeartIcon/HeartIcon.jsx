// import React from "react";
// import styles from './HeartIcon.module.css';
// import App from "../DiscountBanner/DiscountBanner";

// const HeartIcon = () => {
//     return (
//      <FontAwesomeIcon icon={byPrefixAndName.far['heart']} />  
//     )
// };

// export default App;


import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import styles from './HeartIcon.module.css';

const HeartIcon = () => {
    return (
        <FontAwesomeIcon icon={faHeart} className={styles.heartIcon} />
    );
};

export default HeartIcon; 