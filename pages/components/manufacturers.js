import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image';

export default class MultipleItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slidesToShow: 8
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener("resize", this.handleResize);
    }
  }

  calculateSlidesToShow = () => {
    return window.innerWidth <= 640 ? 3 : 8;
  };

  handleResize = () => {
    const slidesToShow = this.calculateSlidesToShow();
    this.setState({ slidesToShow });
  };

  render() {
    const { slidesToShow } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 3
    };
    return (
      <div className="w-full overflow-x-hidden bg-white rounded-lg shadow-lg overflow-hidden">
        <h2 className="pt-8 flex justify-center">Manufacturers</h2>
        <div className="px-4 pb-8">
          <Slider {...settings} className="py-6">
            <div>
              <Image width={130} height={130} src='https://ducaqjqbmh7lv.cloudfront.net/tecliason/Tecliaison-LTD-Icon-1.png'/>
            </div>
            <div>
              <Image width={130} height={130} src='https://ducaqjqbmh7lv.cloudfront.net/tecliason/Tecliaison-LTD-Icon-10-1.png'/>
            </div>
            <div>
              <Image width={130} height={130} src='https://ducaqjqbmh7lv.cloudfront.net/tecliason/Tecliaison-LTD-Icon-11-1.png'/>
            </div>
            <div>
              <Image width={130} height={130} src='https://ducaqjqbmh7lv.cloudfront.net/tecliason/Tecliaison-LTD-Icon-12-1.png'/>
            </div>
            <div>
              <Image width={130} height={130} src='https://ducaqjqbmh7lv.cloudfront.net/tecliason/Tecliaison-LTD-Icon-13.png'/>
            </div>
            <div>
              <Image width={130} height={130} src='https://ducaqjqbmh7lv.cloudfront.net/tecliason/Tecliaison-LTD-Icon-14.png'/>
            </div>
            <div>
              <Image width={130} height={130} src='https://ducaqjqbmh7lv.cloudfront.net/tecliason/Tecliaison-LTD-Icon-15.png'/>
            </div>
            <div>
              <Image width={130} height={130} src='https://ducaqjqbmh7lv.cloudfront.net/tecliason/Tecliaison-LTD-Icon-16.png'/>
            </div>
            <div>
              <Image width={130} height={130} src='https://ducaqjqbmh7lv.cloudfront.net/tecliason/Tecliaison-LTD-Icon-2.png'/>
            </div>
            <div>
              <Image width={130} height={130} src='https://ducaqjqbmh7lv.cloudfront.net/tecliason/Tecliaison-LTD-Icon-3.png'/>
            </div>
            <div>
              <Image width={130} height={130} src='https://ducaqjqbmh7lv.cloudfront.net/tecliason/Tecliaison-LTD-Icon-4.png'/>
            </div>
            <div>
              <Image width={130} height={130} src='https://ducaqjqbmh7lv.cloudfront.net/tecliason/Tecliaison-LTD-Icon-5.png'/>
            </div>
            <div>
              <Image width={130} height={130} src='https://ducaqjqbmh7lv.cloudfront.net/tecliason/Tecliaison-LTD-Icon-6.png'/>
            </div>
            <div>
              <Image width={130} height={130} src='https://ducaqjqbmh7lv.cloudfront.net/tecliason/Tecliaison-LTD-Icon-7.png'/>
            </div>
            <div>
              <Image width={130} height={130} src='https://ducaqjqbmh7lv.cloudfront.net/tecliason/Tecliaison-LTD-Icon-8.png'/>
            </div>
            <div>
              <Image width={130} height={130} src='https://ducaqjqbmh7lv.cloudfront.net/tecliason/Tecliaison-LTD-Icon-9-1.png'/>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
