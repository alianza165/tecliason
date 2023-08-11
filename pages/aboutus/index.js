import React from 'react';
import Footer from '../components/footer'
import Header from '../components/header';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About Us</h1>
            <p className="text-gray-600 text-lg">
              We are a passionate team dedicated to delivering quality products and exceptional service to our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <img
                src="/images/about-image.jpg" // Replace with your own image
                alt="About Us"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac odio eu est tristique lacinia ut non odio. Sed bibendum blandit arcu, id dictum arcu rhoncus a. In hac habitasse platea dictumst.
              </p>
              <p className="text-gray-600 mt-4">
                Nulla facilisi. Vestibulum a metus vel purus luctus venenatis a id eros. Nam cursus tortor vitae nunc lacinia, sit amet sodales elit malesuada.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
