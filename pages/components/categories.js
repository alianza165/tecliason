import Link from 'next/link';
import API from '../../utils/API';
import { useState, useEffect } from "react";
import { useApiContext } from '../../utils/ApiContext';


export default function Categories() {

  const { productTypes } = useApiContext();

  return (

    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-8">
          <h2 className="text-2xl font-bold text-gray-900 flex justify-center pb-6">Our Top Products</h2>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {productTypes.map((product) => (
              <Link key={product.id} href={{pathname: '/categories', query: { name: product.product_type},}} passHref>

                <div className="aspect-h-1 aspect-w-1 h-10 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 sm:h-32">
                  <img
                    src={product.type_image}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.product_type}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>

            </Link>
            ))}
          </div>
          <Link href={{ pathname: '/viewall/categories' }} passHref>
            <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm/[20px] w-full">
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
