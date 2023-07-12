import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import CustomCarousel from '../carousel';

export default function Body() {

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6">
        <div className="bg-white rounded-lg shadow-lg hidden sm:block">
          <div className="p-3">
            <h2 className="text-xl font-bold my-3 text-red-600">Popular Brands</h2>
            <ul className="list-disc">
              <li>ABB</li>
              <li>GE</li>
              <li>Carlo Gavazzi</li>
              <li>Allen Bradley</li>
              <li>Sauer</li>
              <li>WEG</li>
              <li>Hyundai</li>
              <li>SIEMENS</li>
              <li>ASCO</li>
              <li>Danfoss</li>
              <li>Honeywell</li>
              <li>BACO</li>
              <li>Eaton</li>
              <li>EMERSON</li>
              <li>ENDRESS</li>
              <li>Rexroth</li>
            </ul>
          </div>
          <div className="bg-gray-100 px-4 py-2 border-t border-gray-200">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View All
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg col-span-3 sm:max-h-8">
          <CustomCarousel />
        </div>
      </div>
    </div>
  );
}
