import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 404) {
      console.log('no nie dziala');
    }
    return Promise.reject(err);
  },
);

export default api;
