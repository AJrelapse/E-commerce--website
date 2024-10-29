import React from 'react';
import styles from "../styles/Cards.module.css";
import { useNavigate } from "react-router-dom";

function Cards() {
  const navigate = useNavigate();

  const handleNavigate = (imgSrc, title, price, id) => {
    navigate("/Itempage", {
      state: { imgSrc, title, price, id },
    });
  };

  return (
    <div className={styles.txt}>
      <h3 className="ui2-heading">
        Daily <span><b className="red_txt">Deals</b></span>
      </h3>

      <div className={styles["card-cont-1"]}>
        <div className={styles.cad}>
          <img className="card1-img" src="./assets/images/nzxt1.avif" alt="Prebuilt Gaming PC" onClick={() => handleNavigate("./assets/images/nzxt1.avif", "Prebuilt Gaming PC", "₹ 2,50,000", 5)} />
          <h4>Prebuilt Gaming PC</h4>
        </div>

        <div className={styles.cad}>
          <img
            className="card1-img"
            src="./assets/images/bose1.jpeg"
            alt="Wireless Headphones"
            onClick={() => handleNavigate("./assets/images/bose1.jpeg","Wireless Headphones", "₹ 28,000",6)}
          />
          <h4>Wireless Headphones</h4>
        </div>

        <div className={styles.cad}>
          <img
            className="card1-img"
            src="./assets/images/nintendo.jpeg"
            alt="Gaming Console"
            onClick={() => handleNavigate("./assets/images/nintendo.jpeg","Gaming Console", "₹ 25,000",7)}
          />
          <h4>Gaming Console</h4>
        </div>

        <div className={styles.cad}>
          <img
            className="card1-img"
            src="./assets/images/ipad.webp"
            alt="iPads"
            onClick={() => handleNavigate("./assets/images/ipad.webp","iPads", "₹ 30,000",8)}
          />
          <h4>iPad</h4>
        </div>

        <div className={styles.cad}>
          <img
            className="card1-img"
            src="./assets/images/legion.webp"
            alt="Gaming Laptops"
            onClick={() => handleNavigate("./assets/images/legion.webp","Gaming Laptops", "₹ 1,75,000",9)}
          />
          <h4>Gaming Laptop</h4>
        </div>
      </div>
    </div>
  );
}

export default Cards;
