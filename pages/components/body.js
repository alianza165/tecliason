import { Dialog } from '@headlessui/react';
import CustomCarousel from '../carousel';
import Link from 'next/link';

import API from '../../utils/API';
import { useState, useEffect } from "react";
import { useApiContext } from '../../utils/ApiContext';

export default function Body() {
  const { brands } = useApiContext(); // Access the "brands" array from the context

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-6">
        <div className="relative h-full grid grid-rows-2 grid-flow-col gap-4 bg-white rounded-lg shadow-lg hidden sm:block items-stretch">
          <div className="p-2">
            <div className="bg-red-700 flex justify-center items-center border-solid border-2 border-red-400 rounded-md">
              <h2 className="text-xl font-bold my-1 text-gray-300 p-1">Popular Brands</h2>
            </div>
            <ul className="list-none pt-2 pl-3 list-none font-sans">
              {brands.slice(0, 10).map((brand, index) => (
                <Link key={brand.id} href={{ pathname: '/brands', query: { name: brand.brand } }} passHref>
                  <li key={index} className="py-0.5 text-black text-sm/[20px]">
                    {brand.brand}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gray-100 px-4 py-1 border-t border-gray-200 flex justify-center items-center self-end">
            <Link href={{ pathname: '/viewall/brands' }} passHref>
              <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm/[20px] w-full">
                View All
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg col-span-4">
          {/* Assuming CustomCarousel is consuming the "brands" array */}
          <CustomCarousel />
        </div>
      </div>
    </div>
  );
}
