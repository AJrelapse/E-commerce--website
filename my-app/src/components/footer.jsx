import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import styles from '../styles/footer.module.css';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footerContent + ' py-4'}>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className={styles.navLink + ' px-3'}>Home</a>
          </li>
          <li className="nav-item">
            <a href="/Search" className={styles.navLink + ' px-3'}>Search</a>
          </li>
          <li className="nav-item">
            <a href="/Login" className={styles.navLink + ' px-3'}>Account</a>
          </li>
          <li className="nav-item">
            <a href="/Cart" className={styles.navLink + ' px-3'}>Cart</a>
          </li>
        </ul>
        <div className={styles.socialMedia}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
        <p className={styles.textCenter}>© 2024 CodeChef Store, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
