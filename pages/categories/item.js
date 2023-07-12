import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Footer from '../components/footer'
import Box from '@mui/material/Box';
import Header from '../components/header';
//import Breadcrumb from '../components/breadcrumb';


const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '/categories/item',
    price: '$48',
    imageSrc: 'https://als-bucket-456.s3.amazonaws.com/item_pics/13-18A.png',
    imageAlt: 'contactors',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '/categories/item',
    price: '$35',
    imageSrc: 'https://als-bucket-456.s3.amazonaws.com/item_pics/etn150.png',
    imageAlt: 'motors',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '/categories/item',
    price: '$89',
    imageSrc: 'https://als-bucket-456.s3.amazonaws.com/item_pics/nf-125cv-125a.png',
    imageAlt: 'breakers',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '/categories/item',
    price: '$35',
    imageSrc: 'https://als-bucket-456.s3.amazonaws.com/item_pics/s-t100.png',
    imageAlt: 'motor-starters',
  },
  // More products...
];

export default function Products() {

const router = useRouter();
const { name } = router.query;
  return (
<div>
<Header />
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={{pathname: product.href, query: { name: product.imageAlt},}} passHref>

                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>

            </Link>
          ))}
        </div>
      </div>
    </div>
    <Footer /> 
    </div>
    
  );
}

