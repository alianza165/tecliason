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
        <Header />

        <div className="py-8">
        <Body />
        </div>
        <div className="w-full px-6">
        <Manufacturers />
        </div>
        <div className="py-12">
        <Categories />  
        </div>
        <Feature />    
        <Footer />  
      </Box>
  );
}
