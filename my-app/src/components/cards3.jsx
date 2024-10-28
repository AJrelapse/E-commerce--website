import React, { useContext } from 'react';
import styles from "../styles/Cards3.module.css";
import { ShopContext } from "../components/shop-context";

const Cards = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  return (
    <div className={styles.txt}>




          <div className={styles.card}>
              <div className={styles["card-img"]}><div className={styles.img}><img src={productImage} alt="IPhone 16" /></div></div>
              <div className={styles["card-title"]}>{productName}</div>
              <div className={styles["card-subtitle"]}></div>
              <hr className={styles["card-divider"]}/>
              <div className={styles["card-footer"]}>
                  <div className={styles["card-price"]}><span>₹</span> {price}</div>
                  <button className={styles["addToCartBttn"]} onClick={() => addToCart(id)} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
                    {cartItemCount > 0 && <> ({cartItemCount})</>}
                  </button>
              </div>
          </div>

      </div>

  );
}

export default Cards;
