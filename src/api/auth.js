/* eslint-disable implicit-arrow-linebreak */
import axios from './axiosConfig';

export const login = async (credentials) =>
  axios
    .post('/users/signIn', credentials)
    .then((resp) => {
      console.log(credentials);
      return resp;
    })
    .catch((error) => error.response.data.message);

export const signUp = async (body) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  axios
    .post('/users', body)
    .then((resp) => {
      console.log(resp);
      const { status, data } = resp;
      return { status, data };
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

export const logout = () => {
  const resp = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  return resp;
};
