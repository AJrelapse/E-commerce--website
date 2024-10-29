import React from 'react';
import styles from "../styles/Cards2.module.css";
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
        Diwali <span><b className="red_txt">Fashion Deals</b></span>
      </h3>

      <div className={styles["card-cont-1"]}>
        <div className={styles.cad}>
            <img className="card1-img" src="./assets/images/aj1.webp" alt="Shoes" onClick={() => handleNavigate("./assets/images/aj1.webp", "Sneaker", "₹ 14,000", 10)}/>
          <h4>Sneaker</h4>
        </div>

        <div className={styles.cad}>
            <img className="card1-img" src="./assets/images/ea.webp" alt="Watches" onClick={() => handleNavigate("./assets/images/ea.webp", "Watch", "₹ 20,000", 11)}/>
        
          <h4>Watch</h4>
        </div>

        <div className={styles.cad}>
            <img className="card1-img" src="./assets/images/per.webp" alt="Perfumes" onClick={() => handleNavigate("./assets/images/per.webp", "Perfume", "₹ 3,000", 12)}/>

          <h4>Perfume</h4>
        </div>

        <div className={styles.cad}>
            <img className="card1-img" src="./assets/images/sung.jpg" alt="Sunglasses" onClick={() => handleNavigate("./assets/images/sung.jpg", "Sunglasses", "₹ 4,500", 13)}/>

          <h4>Sunglasses</h4>
        </div>

        <div className={styles.cad}>
            <img className="card1-img" src="./assets/images/ring.webp" alt="Rings" onClick={() => handleNavigate("./assets/images/ring.webp", "Ring", "₹ 9,000", 14)}/>

          <h4>Ring</h4>
        </div>
      </div>
    </div>
  );
}

export default Cards;
