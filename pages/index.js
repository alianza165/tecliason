import * as React from 'react';
import Box from '@mui/material/Box';
import Categories from './components/categories';
import Footer from './components/footer';
import Feature from './components/feature';
import Hero from './components/hero';
import Body from './components/body';
import Manufacturers from './components/manufacturers';
import Header from './components/header';

export default function Main() {
  return (
    <Box component="main">
      {/* Header and Body with the background */}
      <div className="w-full relative  h-max">
        <div
          className="bg-local absolute inset-0 opacity-50 brightness-50 h-screen"
          style={{
            backgroundImage: 'url("https://ducaqjqbmh7lv.cloudfront.net/tecliason/valves-carousel")',
            zIndex: -1, // Place the background behind other content
          }}
        ></div>
        <Header />
        <div className="pt-8 md:py-8">
          <Body />
        </div>
      </div>


      {/* Manufacturers */}
      <div className="w-full px-6 hidden md:block">
        <Manufacturers />
      </div>

      {/* Categories */}
      <div className="py-12">
        <Categories />
      </div>

      {/* Feature and Footer */}
      <Feature />
      <Footer />
    </Box>
  );
}
