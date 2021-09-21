import products from './mockProducts.json';

export const getProducts = () => {
  const data = new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    } catch (e) {
      reject(e);
    }
  });
  return data;
};

export const addProduct = () => true;
