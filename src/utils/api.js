import axios from 'axios';
// import store from '../store';
// import { USER_LOGIN_LOGOUT } from '../actions/types';

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
      // localStorage.removeItem('user');
      // store.dispatch({
      //   type: USER_LOGIN_LOGOUT,
      // });
    }
    return Promise.reject(err);
  },
);

export default api;
