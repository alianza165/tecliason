import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function CustomCarousel() {
  return (
    <Carousel showArrows={true} infiniteLoop={true} showIndicators={true} showStatus={false} autoPlay={true}>
      <div className="relative">
    <h4 className="text-xl font-bold block sm:hidden pt-2">Empowering Industrial Excellence</h4>
        <img src="https://als-bucket-456.s3.amazonaws.com/tecliason/power-plant" alt="Slide 2" className="w-full h-auto" />
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-black text-center hidden sm:block">
          <h4 className="text-xl font-bold">Empowering Industrial Excellence</h4>
          <p className="text-sm">Elevating manufacturing standards with cutting-edge solutions.</p>
        </div>
      </div>
      <div className="relative">
      <h4 className="text-xl font-bold block sm:hidden pt-2">Efficiency, Innovation, Reliability</h4>
        <img src="https://als-bucket-456.s3.amazonaws.com/tecliason/motor-carousel" alt="Slide 2" className="w-full h-auto brightness-75" />
        <div className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center hidden sm:block">
          <h4 className="text-xl font-bold">Efficiency, Innovation, Reliability</h4>
          <p className="text-sm">Driving industrial success through streamlined processes, groundbreaking ideas, and trusted performance.</p>
        </div>
      </div>
      <div className="relative">
      <h4 className="text-xl font-bold block sm:hidden pt-2">Customer-Centric Commitment</h4>
        <img src="https://als-bucket-456.s3.amazonaws.com/tecliason/valves-carousel" alt="Slide 3" className="w-full h-auto brightness-75" />
        <div className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center hidden sm:block">
          <h4 className="text-xl font-bold">Customer-Centric Commitment</h4>
          <p className="text-sm">Putting customers first with personalized care and unwavering commitment.</p>
        </div>
      </div>
    </Carousel>
  );
}

