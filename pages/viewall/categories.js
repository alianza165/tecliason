import * as React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { useState, useEffect } from "react";
import API from '../../utils/API';
import Link from 'next/link';
import { useApiContext } from '../../utils/ApiContext';
import Breadcrumb from '../../utils/breadcrumb'
import { useRouter } from 'next/router';
import Image from 'next/image';


export default function Main() {

  const { productTypes } = useApiContext();
  const router = useRouter();
  const { name } = router.query;
  const query = router.route;
  const queryParts = query.split('/');
  const lastQueryPart = queryParts[queryParts.length - 1];

  return (
    <div>
    <Header />
    <Breadcrumb crumb={{ lastQueryPart }} />
      <div className="grid grid-cols-2 mx-4 gap-x-6 gap-y-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
              {productTypes.map((product) => (
              <div className="md:p-8">
              <Link key={product.id} href={{pathname: '/categories', query: { name: product.product_type},}} passHref>

                <div className="shadow bg-gray-600 hover:-translate-y-2 hover:rotate-2 transition-all aspect-h-1 aspect-w-1 h-10 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 sm:h-32">
                  <Image
                    src={product.type_image}
                    width={130} height={130}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 p-2"
                  />
                </div>
                <h3 className="p-1 mt-2 text-base text-gray-700 bg-gray-200 w-fit">{product.product_type}</h3>
            </Link>
            <p className="mt-1 text-sm italic font-thin line-clamp-2 ">{product.type_description}</p>
            </div>
            ))}
            </div>
    <Footer />
    </div>
  );
}
