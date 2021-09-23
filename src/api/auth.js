import axios from './axiosConfig';

export const login = async (credentials) => {
  await axios
    .post('/users/signIn', credentials)
    .then((resp) => {
      console.log(resp);
      return resp.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const signUp = async (body) => {
  await axios
    .post('/users', body)
    .then((resp) => {
      console.log(resp);
      return resp.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const logout = () => {
  const resp = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  return resp;
};
