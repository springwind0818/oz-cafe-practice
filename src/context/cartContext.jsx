import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ✅ 1. 장바구니 추가
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // ✅ 2. 장바구니 제거
  const removeFromCart = (index) => {
    setCart((prevCart) =>
      prevCart.filter((_, i) => i !== index)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};