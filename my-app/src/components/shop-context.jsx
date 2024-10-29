import { createContext, useState } from "react";
import { PRODUCTS } from "../products";
import { PRODUCTS2 } from "../products2";
import { PRODUCTS3 } from "../products3";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  [...PRODUCTS, ...PRODUCTS2, ...PRODUCTS3].forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};


export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item)) ||
                       PRODUCTS2.find((product) => product.id === Number(item)) ||
                       PRODUCTS3.find((product) => product.id === Number(item));
  
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        } else {
          console.warn(`Product with id ${item} not found.`);
        }
      }
    }
    return totalAmount;
  };
  

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
