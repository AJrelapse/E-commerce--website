import React from 'react';
import styles from "../styles/Cards2.module.css";

function Cards() {
  return (
    <div className={styles.txt}>
      <h3 className="ui2-heading">
        Diwali <span><b className="red_txt">Fashion Deals</b></span>
      </h3>

      <div className={styles["card-cont-1"]}>
        <div className={styles.cad}>
          <a href="...">
            <img className="card1-img" src="./assets/images/aj1.webp" alt="Shoes" />
          </a>
          <h4>Shoes</h4>
        </div>

        <div className={styles.cad}>
          <a href="...">
            <img className="card1-img" src="./assets/images/ea.webp" alt="Watches" />
          </a>
          <h4>Watches</h4>
        </div>

        <div className={styles.cad}>
          <a href="...">
            <img className="card1-img" src="./assets/images/per.webp" alt="Perfumes" />
          </a>
          <h4>Perfumes</h4>
        </div>

        <div className={styles.cad}>
          <a href="...">
            <img className="card1-img" src="./assets/images/sung.jpg" alt="Sunglasses" />
          </a>
          <h4>Sunglasses</h4>
        </div>

        <div className={styles.cad}>
          <a href="...">
            <img className="card1-img" src="./assets/images/ring.webp" alt="Rings" />
          </a>
          <h4>Rings</h4>
        </div>
      </div>
    </div>
  );
}

export default Cards;
