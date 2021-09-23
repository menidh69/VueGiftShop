/* eslint-disable implicit-arrow-linebreak */
// import products from './mockProducts.json';
import axios from './axiosConfig';

// eslint-disable-next-line import/prefer-default-export
export const getProducts = () =>
  axios
    .get('/products')
    .then((resp) => resp.data)
    .catch((e) => e.response.message);
