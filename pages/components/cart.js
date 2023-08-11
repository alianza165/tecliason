import React, { useContext } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ShoppingCartIcon } from '@heroicons/react/20/solid';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { CartContext } from '../../utils/cartContext';
import Link from 'next/link';

const CartComponent = () => {
  const { cartItems, removeItemFromCart, clearCart } = useContext(CartContext);

  return (
    <Menu as="div" className="flex items-center pr-4 pt-1">
      <div>
        <Menu.Button className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-2 py-1">
          <ShoppingCartIcon className="h-6 right-0 w-6 black" />
          {/* Display the badge */}
          {cartItems.length > 0 && (
            <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs ">
              {cartItems.length}
            </span>
          )}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
        
      </div>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 right-4 top-10 w-fit rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-[400px] overflow-y-auto">
          <div className="py-1 divide-y">
            <h4 className="p-1 ml-5 mt-2 underline-offset-4 underline mb-3"> My Cart </h4>
            <div className="py-4">
              <ul role="list" className="-my-6 divide-y divide-gray-200 mr-6 px-6">
                {cartItems.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.image}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h6>
                            <Link key={product.id} href={{pathname: '/item', query: { name: product.item_name, cart_flag:"true"},}} passHref>
                            {product.item_name}
                            </Link>
                          </h6>
                        </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {product.quantity}</p>

                        <div className="flex bg-[#fca5a5] rounded text-black p-1">
                          <button onClick={() => removeItemFromCart(product.id)}>Remove</button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              </div>
              <div className="p-6">
                <Link className="px-1 py-2 bg-[#60a5fa] text-white rounded" href={{ pathname: '/cart' }} passHref>
                  Send Enquiry
                </Link>
                <button className="ml-5 rounded p-1 bg-[#fca5a5]" onClick={clearCart}>Clear Cart</button>
              </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CartComponent;
