import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Footer from '../components/footer'
import Box from '@mui/material/Box';
import Header from '../components/header';
import { useState, useEffect } from "react";
import API from '../../utils/API';
import { useApiContext } from '../../utils/ApiContext';
import Breadcrumb from '../../utils/breadcrumb'
//import Breadcrumb from '../components/breadcrumb';

// pages/brand.js (or the appropriate file where you want to access the brand name)


export default function Products() {
  const router = useRouter();
  const { name } = router.query;
  const query = "categories";

  const { productTypes } = useApiContext();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const itemsPerPage = 20; // Number of items per page
  const selectedType = productTypes.find(productTypes => productTypes.product_type === name);
  const [totalItems, setTotalItems] = useState([]);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    if (name) {
      handleFetchTypeFilter();
    }
  }, [name, currentPage, totalItems]);

  const handleFetchTypeFilter = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    API.get(`/producttypefilter/${name}/`)
      .then((res) => {
        const paginatedData = res.data.slice(startIndex, endIndex);
        setItems(paginatedData);
        setTotalItems(res.data.length)
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        setLoading(false);
      });
  };

  return (
    <div>
      <Header />
      <div className="bg-white mb-10 ">
      <Breadcrumb crumb={{ query, name }} />
        <div className="mx-auto max-w-2xl px-4 py-2 md:px-6 md:py-4 lg:max-w-7xl lg:px-6">
          <h2 className="sr-only">Products</h2>
          {selectedType && (
          <div>
          <div className="flex justify-center bg-[#f7fee7] p-4">
            <h1 className="mr-4 mt-2">{selectedType.product_type}</h1>
            <img className="h-16 mb-2" 
            src={selectedType.type_image}
            />
          </div>
            <p className="p-8 flex justify-center lg:text-lg md:text-lg sm:text-lg font-sans italic font-medium"> {selectedType.type_description}</p>
          </div>
        )}

          {loading ? (
            <p className="text-center text-gray-600">Loading...</p> // Loading state
          ) : (
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {items.map((product) => (
                <div className="md:p-8">
                <Link key={product.id} href={{ pathname: '/item', query: { name: product.item_name, filter_type:"categories", filter_name:name } }} passHref>
                  <div className="bg-gray-600 hover:-translate-y-2 hover:rotate-2 transition-all aspect-h-1 aspect-w-1 h-10 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 sm:h-32">
                  <img
                    src={product.image}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 p-2"
                  />
                </div>
                <h3 className="p-1 mt-2 text-base text-gray-700 bg-gray-200 w-fit">{product.item_name}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>

                </Link>
                </div>
              ))}
            </div>
          )}
           <div className="mt-10 flex justify-center">
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currentPage === 1}
          className="mr-2 px-4 py-2 border rounded-lg"
        >
          Previous
        </button>
        <p className="px-4 py-2">{currentPage} / {totalPages}</p> {/* Display page numbers */}
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={items.length < itemsPerPage}
          className="ml-2 px-4 py-2 border rounded-lg"
        >
          Next
        </button>
      </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
