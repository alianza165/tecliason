import { Dialog } from '@headlessui/react';
import CustomCarousel from '../carousel';
import Link from 'next/link';
import Image from 'next/image';

import API from '../../utils/API';
import { useState, useEffect } from "react";
import { useApiContext } from '../../utils/ApiContext';

export default function Body() {
  const { brands } = useApiContext(); // Access the "brands" array from the context

  return (
    <div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-0 m-10">
          <div>
            <h1 className="font-bold text-5xl md:text-7xl mb-4 text-black">We’re changing the way people connect.</h1>
            <p className="text-black mb-6 text-xl pt-6 pr-20">
              We are a trading house that specializes in selling mechanical and electrical parts and equipment for various industrial plants, including power plants, desalination plants, chemical plants, and refineries.
            </p>
          </div>
          <div className="hidden sm:block">
            <Image src="https://ducaqjqbmh7lv.cloudfront.net/tecliason_pics/feature-image1.jpg" width={400} height={400} className="w-full h-auto rounded-2xl" />
          </div>
        </div>

      </div>
  );
}
