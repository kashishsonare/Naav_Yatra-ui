import React from 'react';
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h3>Naav_yatra</h3>
        <p>Boat travel offers a unique and immersive experience, allowing travelers to explore destinations from a different perspective. As the gentle waves rock the boat, passengers can relax and enjoy the scenic views along the waterways. Whether it's a serene river cruise, an adventurous voyage across the open sea, or a tranquil journey on a picturesque lake, each boat trip brings its own charm and excitement. Traveling by boat also offers a sense of freedom and adventure, with opportunities to discover hidden gems and remote locations unreachable by other means of transport. From luxury yachts to traditional wooden boats, there are various options to suit every traveler's preference and style. Boat travel not only provides a refreshing break from the hustle and bustle of everyday life but also allows for unforgettable experiences and memories that last a lifetime.
        </p>
        <ul className={styles.socials}>
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
          <li><a href="#"><i className="fa fa-youtube"></i></a></li>
          <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
        </ul>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
