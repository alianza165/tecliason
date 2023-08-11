import React, { createContext, useContext, useState, useEffect } from 'react';
import API from './API'; // Adjust the path as needed

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);
  const [productTypes, setProductTypes] = useState([]);

  useEffect(() => {
    handleFetchBrands();
    handleFetchProductTypes();
  }, []);

  const handleFetchBrands = () => {
    API.get('/brand/')
      .then((res) => {
        setBrands(res.data);
      })
      .catch((error) => {
        console.error('Error fetching brands:', error);
      });
  };

  const handleFetchProductTypes = () => {
    API.get('/product_type/')
      .then((res) => {
        setProductTypes(res.data);
      })
      .catch((error) => {
        console.error('Error fetching product types:', error);
      });
  };

  return (
    <ApiContext.Provider value={{ brands, productTypes }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => useContext(ApiContext);

