import api from '../utils/api';
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_LOGOUT, ALERT_ADD } from './types';
import { addAlert } from './alertActions';

export const userLogin = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_LOGIN_REQUEST,
  });

  try {
    const { data } = await api.post('/user/login', {
      email,
      password,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('user', JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
    });

    if (!err.status) {
      dispatch({
        type: ALERT_ADD,
        payload: {
          msg: 'Błąd połączenia z serwerem',
          type: 'error',
        },
      });
    }

    if (err.response) {
      if (err.response.status === 404) {
        dispatch(addAlert('Błędny adres email lub hasło', 'error'));
      }

      if (err.response.status === 400) {
        dispatch(addAlert('Nie wprowadziłeś adresu email lub hasła', 'error'));
      }
    }
  }
};

export const userLogout = () => (dispatch) => {
  localStorage.removeItem('user');
  dispatch({
    type: USER_LOGIN_LOGOUT,
  });
};
