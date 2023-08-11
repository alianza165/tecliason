import React, { useContext, useState } from 'react';
import { CartContext } from '../../utils/cartContext';

const Product = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1); // Initialize quantity state

  const handleAddToCart = (e) => {
    console.log("add")
    e.preventDefault();
    addItemToCart({ ...product, quantity }); // Include selected quantity
  };
  
  const handleQuantityChange = (event) => {
    console.log("quantity")
    event.preventDefault(); // Prevent form submission
    const selectedQuantity = parseInt(event.target.value, 10);
    setQuantity(selectedQuantity);
  };

  // Prevent the scrolling behavior when the select element is focused
  const preventScroll = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div>
        <select value={quantity} onChange={handleQuantityChange} onFocus={preventScroll}>
          {Array.from({ length: 8 }, (_, index) => index + 1).map((qty) => (
            <option key={qty} value={qty}>
              {qty}
            </option>
          ))}
        </select>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
