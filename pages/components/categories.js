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
          <h2 className="text-2xl font-sans text-gray-900 flex justify-center pb-6 italic font-extralight decoration-double decoration-gray-400 underline">Our Top Products</h2>

          <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {productTypes.slice(0, 6).map((product, index) => (
              <div className="md:p-8">
              <Link key={product.id} href={{pathname: '/categories', query: { name: product.product_type},}} passHref>

                <div className="shadow-lg bg-gray-600 hover:-translate-y-1 hover:rotate-1 transition-all aspect-h-1 aspect-w-1 h-10 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 sm:h-32">
                  <img
                    src={product.type_image}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 p-2"
                  />
                </div>
                <h3 className="p-1 mt-2 text-base text-gray-700 bg-gray-200 w-fit">{product.product_type}</h3>
            </Link>
            <p className="mt-1 text-sm italic font-thin line-clamp-2 ">{product.type_description}</p>
            </div>
            ))}
          </div>
          <Link className=" flex justify-center" href={{ pathname: '/viewall/categories' }} passHref>
            <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm/[20px]">
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
