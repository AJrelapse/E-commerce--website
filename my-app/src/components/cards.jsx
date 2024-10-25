import React from 'react';
import styles from "../styles/Cards.module.css";

function Cards() {
  return (
    <div className={styles.txt}>
      <h3 className="ui2-heading">
        Daily <span><b className="red_txt">Deals</b></span>
      </h3>

      <div className={styles["card-cont-1"]}>
        <div className={styles.cad}>
          <a href="...">
            <img className="card1-img" src="./assets/images/nzxt1.avif" alt="Prebuilt Gaming PC" />
          </a>
          <h4>   .</h4>
          <h4>Prebuilt Gaming PC</h4>
        </div>

        <div className={styles.cad}>
          <a href="...">
            <img className="card1-img" src="./assets/images/bose1.jpeg" alt="Wireless Headphones" />
          </a>
          <h4>Wireless Headphones</h4>
        </div>

        <div className={styles.cad}>
          <a href="...">
            <img className="card1-img" src="./assets/images/nintendo.jpeg" alt="Gaming Console" />
          </a>
          <h4>Gaming Console</h4>
        </div>

        <div className={styles.cad}>
          <a href="...">
            <img className="card1-img" src="./assets/images/ipad.webp" alt="iPads" />
          </a>
          <h4>iPads</h4>
        </div>

        <div className={styles.cad}>
          <a href="...">
            <img className="card1-img" src="./assets/images/legion.webp" alt="Gaming Laptops" />
          </a>
          <h4>.</h4>
          <h4>.</h4>
          <h4>Gaming Laptops</h4>
        </div>
      </div>
    </div>
  );
}

export default Cards;
