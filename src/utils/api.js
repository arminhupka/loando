import axios from 'axios';
import store from '../store';
import { userLogout } from '../actions/userActions';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      console.log('xd');
      store.store.dispatch(userLogout());
    }
    return Promise.reject(err);
  },
);

export default api;
