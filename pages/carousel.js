import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function CustomCarousel() {
  return (
    <Carousel showArrows={true} infiniteLoop={true} showIndicators={true} showStatus={false} autoPlay={true}>
      <div className="relative">
        <img src="https://als-bucket-456.s3.amazonaws.com/item_pics/clients1.png" alt="Slide 2" className="w-full h-auto" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h5 className="text-xl font-bold">First slide label</h5>
          <p className="text-sm">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div className="relative">
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg" alt="Slide 2" className="w-full h-auto" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h5 className="text-xl font-bold">Second slide label</h5>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="relative">
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg" alt="Slide 3" className="w-full h-auto" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h5 className="text-xl font-bold">Third slide label</h5>
          <p className="text-sm">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </Carousel>
  );
}

