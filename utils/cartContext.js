import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Use isSSR state to determine if it's server-side rendering
  const [isSSR, setIsSSR] = useState(true);

  // Check if it's server-side rendering and update isSSR accordingly
  useEffect(() => {
    setIsSSR(false);
  }, []);

  const initialCartItems = isSSR
    ? []
    : JSON.parse(localStorage.getItem('cartItems')) || []; // Use empty array if null

  const [cartItems, setCartItems] = useState(initialCartItems);
  const maxCartItems = 3; 

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    if (cartItems.length < maxCartItems) {
      const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Update existing item's quantity
        const updatedCartItems = cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: item.quantity } : cartItem
        );
        setCartItems(updatedCartItems);
      } else {
        // Add new item with quantity
        setCartItems((prevCartItems) => [...prevCartItems, item]);
      }
    }
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Use useEffect to save cartItems to localStorage whenever it changes
    useEffect(() => {
    if (!isSSR) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems, isSSR]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
