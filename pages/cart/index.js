import React, { useContext } from 'react';
import Link from 'next/link';
import Footer from '../components/footer'
import Header from '../components/header';
import { useState, useEffect } from "react";
import { CartContext } from '../../utils/cartContext';
import PopupModal from './popup';
import { InboxArrowDownIcon } from '@heroicons/react/20/solid';
//import Breadcrumb from '../components/breadcrumb';

// pages/brand.js (or the appropriate file where you want to access the brand name)


export default function Products() {

  const { addItemToCart } = useContext(CartContext);
  const { cartItems, removeItemFromCart, clearCart } = useContext(CartContext);

  const handleAddItemToCart = (product, quantity) => {
  addItemToCart({ ...product, quantity });
};

  return (
    <div>
    <Header />
        <div className="py-1 divide-y">
            <h4 className="p-1 ml-5 mt-2 underline-offset-4 underline mb-3"> My Cart </h4>
            <div className="py-4">
            {cartItems.length === 0 ? (
              <div className='flex px-6'>
                <InboxArrowDownIcon className='h-20'/>
                <p className="text-gray-700 mt-6 ml-4">Your cart is empty.</p>
              </div>
              ) : (
              <ul role="list" className="-my-6 divide-y divide-gray-200 mr-6 px-6">
                {cartItems.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.image}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4">
                      <div className="flex justify-between">
                          <Link className='text-black' key={product.id} href={{pathname: '/item', query: { name: product.item_name, cart_flag:"true"},}} passHref>
                          {product.item_name}
                          </Link>
                      </div>
                      <div class="flex p-1 bg-gray-700 w-fit rounded">
                      <p className='px-2 mb-0 text-white'>QTY :</p>
                      <select className='rounded h-6 p-0.5'
                        value={product.quantity}
                        onChange={(e) => handleAddItemToCart(product, parseInt(e.target.value))}
                      >
                        {Array.from({ length: 8 }, (_, index) => index + 1).map((qty) => (
                          <option key={qty} value={qty}>
                            {qty}
                          </option>
                        ))}
                      </select>
                      </div>
                      <div className="bg-[#fca5a5] rounded text-black p-1 w-fit mt-2">
                        <button onClick={() => removeItemFromCart(product.id)}>Remove</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              )}
              </div>
              <div className="p-6">
                <PopupModal />
                <button className="ml-5 rounded p-1 bg-[#fca5a5]" onClick={clearCart}>Clear Cart</button>
              </div>
          </div>
        <Footer /> 
        </div>
        
      );
    }

