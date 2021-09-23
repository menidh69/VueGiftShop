/* eslint-disable implicit-arrow-linebreak */
import axios from './axiosConfig';

export const addToCart = async (itemId) =>
  axios
    .post('/shopping-cart', itemId)
    .then((resp) => {
      console.log(resp);
      return resp;
    })
    .catch((e) => {
      console.log(e.response.data.message);
      return e.response.data.message;
    });

export const removeFromCart = async (item) =>
  axios
    .post('/shopping-cart', item)
    .then((resp) => resp)
    .catch((e) => e.response.data.message);
