import React, { useContext } from "react";
import { ShopContext } from "../components/shop-context";
import { PRODUCTS } from "../products";
import { PRODUCTS2 } from "../products2";
import { PRODUCTS3 } from "../products3";
import { CartItem } from "../components/cart-item";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";
import Navbar from "../components/navbar";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
    <Navbar />
      <div className="title">
        <h1>Your Cart Items</h1>
      </div>

      <div className="cart">
        {PRODUCTS.map((product) =>
          cartItems[product.id] !== 0 ? (
            <CartItem key={product.id} data={product} />
          ) : null
        )}
          {PRODUCTS2.map((product) =>
          cartItems[product.id] !== 0 ? (
            <CartItem key={product.id} data={product} />
          ) : null
        )}
        {PRODUCTS3.map((product) =>
          cartItems[product.id] !== 0 ? (
            <CartItem key={product.id} data={product} />
          ) : null
        )}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ₹ {totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button onClick={() => { checkout(); navigate("/checkout");}}>Checkout</button>
        </div>
      ) : ( <h1>Your Shopping Cart is Empty</h1>)}
    </div>
  );
};

export default Cart;
