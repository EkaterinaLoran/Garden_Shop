import React from "react";
import styles from "./Map.module.css";

const Map = () => {
  const handleMapClick = () => {
    window.open(
      "https://maps.google.com/?q=Linkstraße+2,+10785+Berlin,+Germany",
      "_blank"
    );
  };

  return (
    <section className={styles.mapSection}>
      <div className={styles.mapContainer}>
        <img
          src="/Garden_Shop/images/map.png"
          alt="Location map"
          className={styles.mapImage}
          onClick={handleMapClick}
        />
        <div className={styles.mapOverlay}>
          <button className={styles.mapButton}>View on Google Maps</button>
        </div>
      </div>
    </section>
  );
};

export default Map;
