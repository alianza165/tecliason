import React, { useContext, useState } from 'react';
import { CartContext } from '../../utils/cartContext';

const Product = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1); // Initialize quantity state

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItemToCart({ ...product, quantity }); // Include selected quantity
  };

  const handleQuantityChange = (event) => {
    event.preventDefault(); // Prevent form submission
    const selectedQuantity = parseInt(event.target.value, 10);
    setQuantity(selectedQuantity);
  };

  // Prevent the scrolling behavior when the select element is focused
  const preventScroll = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="pb-4 md:mr-2">
        <select value={quantity} onChange={handleQuantityChange} onFocus={preventScroll} className="p-2">
          {Array.from({ length: 8 }, (_, index) => index + 1).map((qty) => (
            <option key={qty} value={qty}>
              {qty}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleAddToCart} className="flex-none md:w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900" type="button">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
