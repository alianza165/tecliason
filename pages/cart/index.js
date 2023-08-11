import React, { useContext } from 'react';
import Link from 'next/link';
import Footer from '../components/footer'
import Header from '../components/header';
import { useState, useEffect } from "react";
import { CartContext } from '../../utils/cartContext';
import PopupModal from './popup';
//import Breadcrumb from '../components/breadcrumb';

// pages/brand.js (or the appropriate file where you want to access the brand name)


export default function Products() {

  const { cartItems, removeItemFromCart, clearCart } = useContext(CartContext);

  return (
    <div>
    <Header />
        <div className="py-1 divide-y">
            <h4 className="p-1 ml-5 mt-2 underline-offset-4 underline mb-3"> My Cart </h4>
            <div className="py-4">
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
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h6>
                            <Link key={product.id} href={{pathname: '/item', query: { name: product.item_name, cart_flag:"true"},}} passHref>
                            {product.item_name}
                            </Link>
                          </h6>
                        </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {product.quantity}</p>

                        <div className="flex bg-[#fca5a5] rounded text-black p-1">
                          <button onClick={() => removeItemFromCart(product.id)}>Remove</button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
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

