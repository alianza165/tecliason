import React, { useState, useContext } from 'react';
import { CartContext } from '../../utils/cartContext';
import API from '../../utils/API';

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const { cartItems } = useContext(CartContext);

  const handleOpenModal = () => {
    console.log(cartItems[0].id);
    setIsOpen(true);
  };

  const things = { email, cartItems };

  const handleSendInquiry = async () => {
    API.post(`/inquiry/`, things)
      .then(() => {
        console.log('Item updated successfully');
      })
      .catch((error) => {
        console.error('Error updating item:', error);
      });
  };

  const handleCloseModal = () => {
    if (isEmailValid) {
      handleSendInquiry();
    }
    setIsOpen(false);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    // Check if the inputEmail is a valid email address
    setIsEmailValid(/^\S+@\S+\.\S+$/.test(inputEmail));
  };

  return (
    <>
      <button
        className="px-1 py-2 bg-[#60a5fa] text-white rounded"
        onClick={handleOpenModal}
      >
        Checkout
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="modal-overlay" onClick={handleCloseModal} />
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-600"
                onClick={handleCloseModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 className="text-2xl font-bold mb-4">Receive A Quote</h2>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className={`w-full px-3 py-2 border rounded focus:outline-none ${
                  isEmailValid ? 'border-gray-300' : 'border-red-500'
                }`}
              />
              {!isEmailValid && (
                <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>
              )}
              <button
                className={`mt-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${
                  isEmailValid ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                }`}
                onClick={handleCloseModal}
                disabled={!isEmailValid}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          background-color: rgba(0, 0, 0, 0.7);
        } 
        .modal-container {
          max-height: 80vh;
        }
      `}</style>
    </>
  );
};

export default PopupModal;
