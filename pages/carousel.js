import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Manufacturers from './components/manufacturers_small';

export default function CustomCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true
  };

  return (
    <div>
      <Slider {...settings} >
        <div className="relative">
          <h4 className="text-xl font-bold block sm:hidden pt-1 font-sans underline underline-offset-2 bg-gray-200 border-solid border-2 border-gray-400 rounded-md pb-1 text-gray-700 text-center">
            Empowering Industrial Excellence
          </h4>
          <img
            src="https://ducaqjqbmh7lv.cloudfront.net/tecliason/power-plant"
            alt="Slide 1"
            className="w-full h-auto"
          />
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-black text-center hidden sm:block bg-gray-200 border-solid border-2 border-gray-400 rounded-md">
            <h4 className="text-xl font-bold pt-1 font-sans underline underline-offset-2 text-gray-700">
              Empowering Industrial Excellence
            </h4>
            <p className="text-sm px-2 font-sans italic text-gray-700">
              Elevating manufacturing standards with cutting-edge solutions.
            </p>
          </div>
        </div>
        <div className="relative">
          <h4 className="text-xl font-bold block sm:hidden pt-1 font-sans underline underline-offset-2 bg-gray-200 border-solid border-2 border-gray-400 rounded-md pb-1 text-gray-700 text-center">
            Efficiency, Innovation, Reliability
          </h4>
          <img
            src="https://ducaqjqbmh7lv.cloudfront.net/tecliason/motor-carousel"
            alt="Slide 2"
            className="w-full h-auto brightness-75"
          />
          <div className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-black text-center hidden sm:block bg-gray-200 border-solid border-2 border-gray-400 rounded-md">
            <h4 className="text-xl font-bold pt-1 font-sans underline underline-offset-2 text-gray-700">
              Efficiency, Innovation, Reliability
            </h4>
            <p className="text-sm px-2 font-sans italic text-gray-700">
              Driving industrial success through streamlined processes, groundbreaking ideas, and trusted performance.
            </p>
          </div>
        </div>
        <div className="relative">
          <h4 className="text-xl font-bold block sm:hidden pt-1 font-sans underline underline-offset-2 bg-gray-200 border-solid border-2 border-gray-400 rounded-md pb-1 text-gray-700 text-center">
            Customer-Centric Commitment
          </h4>
          <img
            src="https://ducaqjqbmh7lv.cloudfront.net/tecliason/valves-carousel"
            alt="Slide 3"
            className="w-full h-auto brightness-75"
          />
          <div className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-black text-center hidden sm:block bg-gray-200 border-solid border-2 border-gray-400 rounded-md">
            <h4 className="text-xl font-bold pt-1 font-sans underline underline-offset-2 text-gray-700">
              Customer-Centric Commitment
            </h4>
            <p className="text-sm px-2 font-sans italic text-gray-700">
              Putting customers first with personalized care and unwavering commitment.
            </p>
          </div>
        </div>
      </Slider>
      <div className="block sm:hidden">
      <Manufacturers />
      </div>

    </div>
  );
}
