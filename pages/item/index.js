import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Footer from '../components/footer'
import Box from '@mui/material/Box';
import Header from '../components/header';
import { Fragment, useState, useEffect } from "react";
import API from '../../utils/API';
import Product from './product';
import Breadcrumb from '../../utils/breadcrumb'


//import Breadcrumb from '../components/breadcrumb';

// pages/brand.js (or the appropriate file where you want to access the brand name)




export default function Products() {

  const router = useRouter();
  const { name } = router.query;
  const { filter_type } = router.query;
  const { filter_name } = router.query;
  console.log(name)
  console.log(filter_type)
  console.log(filter_name)

  

  const [item, setItem] = useState([]);

  useEffect(() => {
    if (name) {
    handleFetchTypeFilter();
  }
  }, [name]);

  const handleFetchTypeFilter = () => {
  API.get(`/itemfilter/${name}/`)
    .then((res) => {
      setItem(res.data)
    })
    .catch((error) => {
      console.error("Error fetching items:", error);
    });
  };

  return (
    <div>
    <Header />
        <div className="bg-white">
        <Breadcrumb crumb={{ filter_type, filter_name, name }} />
          <div className="border p-6 m-6">
            <h2 className="sr-only">Products</h2>
              {item.map((product) => (
                <div className="grid grid-cols-2 gap-x-2 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              
              <div className="grid grid-rows-2 grid-flow-col gap-4">
              <div>
              <div className="bg-[#f7fee7] p-2">
                <h3 className="mt-4 text-sm font-mono">{product.item_name}</h3>
                <p className="mt-1 text-lg font-medium font-mono">{product.item_description}</p>
              </div>
              </div>
              <div>
                <Product key={product.id} product={product} />
              </div>
              </div>
              <div>
                <div className="aspect-h-1 aspect-w-1 overflow-hidden bg-gray-100 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
              </div>
              <div className="grid grid-rows-2 grid-flow-col gap-4">
              <div>
              </div>
              <div >
                <p className="hidden sm:block border-2 font-sans p-4 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              </div>
              </div>
              ))}
            
          </div>
        </div>
        <Footer /> 
        </div>
        
      );
    }

