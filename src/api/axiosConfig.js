import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3002',
});

export const setBearerToken = async (token) => {
  instance.defaults.headers.common = {
    Authorization: `Bearer ${token}`,
  };
};

export default instance;
