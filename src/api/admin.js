/* eslint-disable implicit-arrow-linebreak */
import axios from './axiosConfig';

export const addProduct = async (body) =>
  axios
    .post('/products', body)
    .then((resp) => {
      console.log(resp);
      return resp.data;
    })
    .catch((e) => e.response.data.message);

export const updateProduct = async (id, body) =>
  axios
    .patch(`/products/${id}`, body)
    .then((resp) => resp)
    .catch((e) => e.response.data.message);

export const deleteProduct = async (id) =>
  axios
    .delete(`/products/${id}`)
    .then((resp) => resp)
    .catch((e) => e.response.data.message);
