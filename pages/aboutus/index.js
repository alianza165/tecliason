import React from 'react';
import Footer from '../components/footer'
import Header from '../components/header';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="overflow-x-hidden">
    <Header />
    <img src="https://ducaqjqbmh7lv.cloudfront.net/tecliason_pics/tecliason_background.png" className="absolute opacity-10 w-full rounded-2xl" />
      <div className="bg-gradient-to-r from-gray-200 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-0 m-10">
          <div>
            <h1 className="font-bold text-5xl md:text-7xl mb-4">We’re changing the way people connect.</h1>
            <p className="text-gray-700 mb-6 text-xl pt-6 pr-20">
              We are a trading house that specializes in selling mechanical and electrical parts and equipment for various industrial plants, including power plants, desalination plants, chemical plants, and refineries.
            </p>
          </div>
          <div>
            <Image src="https://ducaqjqbmh7lv.cloudfront.net/tecliason_pics/feature-image1.jpg" width={400} height={400} className="w-full h-auto rounded-2xl" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-10 gap-y-10 m-4 md:mt-20 divide-x-8 divide-gray-400 divide-dashed">
          <div className='col-span-3'>
            <h2 className="text-4xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 w-4/5">
              Whether you are an industrial plant operator, maintenance professional, engineer, or procurement officer who requires a wide range of mechanical and electrical parts and equipment for their plants, we have you covered
            </p>
          </div>
          <div className='col-span-2'>
          <div className='ml-8'>
            <h2 className="text-4xl font-semibold mb-4">WE</h2>
              <div className='flex items-center'>
                <div>
                  <p className='mb-0'>Work with</p>
                  <p className='text-lg font-bold'>20 +</p>
                </div>
                <p className='text-4xl italic ml-6'> BRANDS </p>
              </div>
              <div className='flex items-center'>
                <div>
                  <p className='mb-0'>Cater to</p>
                  <p className='text-lg font-bold'>100 +</p>
                </div>
                <p className='text-4xl italic ml-6'> CUSTOMERS </p>
              </div>
              <div className='flex items-center'>
                <div>
                  <p className='mb-0'>Across</p>
                  <p className='text-lg font-bold'>2</p>
                </div>
                <p className='text-4xl italic ml-6'> CONTINENTS </p>
              </div>
          </div>
          </div>
          </div>
    </div>
    <div className='relative'>
          <p className='absolute text-md w-full md:text-4xl md:m-16 m-6 md:w-3/4'>We synergize: Delivering excellence through collaborative customer service</p>
          <Image src="https://ducaqjqbmh7lv.cloudfront.net/tecliason_pics/together4.jpeg" width={600} height={600} className="w-full" />
          </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
