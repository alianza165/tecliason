import * as React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { useState, useEffect } from "react";
import API from '../../utils/API';
import Link from 'next/link';
import { useApiContext } from '../../utils/ApiContext';
import Breadcrumb from '../../utils/breadcrumb'
import { useRouter } from 'next/router';


export default function Main() {

  const { brands } = useApiContext();
  const router = useRouter();
  const { name } = router.query;
  const query = router.route;
  const queryParts = query.split('/');
  const lastQueryPart = queryParts[queryParts.length - 1];

  return (
    <div>
    <Header />
    <Breadcrumb crumb={{ lastQueryPart }} />
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mx-4 md:mx-8 mt-8">
              {brands.map((brand) => (
                <div className=''>
                <Link key={brand.id} href={{pathname: '/brands', query: { name: brand.brand},}} passHref>
                  
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={brand.brand_image}
                        alt={brand.imageAlt}
                        className="object-contain object-center group-hover:opacity-75 p-4"
                      />
                    </div>
                    <h3 className="mt-4 font-thin line-clamp-4 leading-5 text-base text-gray-700 font-sans md:font-serif">{brand.brand_description}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">{brand.price}</p>

                </Link>
                </div>
              ))}
            </div>
    <Footer />
    </div>
  );
}
