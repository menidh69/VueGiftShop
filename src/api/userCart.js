/* eslint-disable implicit-arrow-linebreak */
import axios from './axiosConfig';

export const addToCart = async (itemId) =>
  axios
    .post('/shopping-cart', { productId: itemId })
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
    .post('/shopping-cart/remove', { productId: item })
    .then((resp) => resp)
    .catch((e) => e.response.data.message);

export const getCart = async (id) =>
  axios
    .get(`/users/${id}/cart`)
    .then((resp) => resp.data)
    .catch((e) => e.response.data.message);

export const buyItems = async () => {
  axios.post('/orders').then((resp) => resp.data)
    .catch((e) => e.response.data.message);
};
