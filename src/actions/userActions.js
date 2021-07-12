import api from '../utils/api';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_LOGOUT,
  USER_LOGIN_FAIL,
  ALERT_REMOVE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_UPDATE_PASSWORD_REQUEST,
  USER_UPDATE_PASSWORD_SUCCESS,
  USER_UPDATE_PASSWORD_FAIL,
} from './types';
import { addAlert } from './alertActions';

export const userRegister = (email, password, firstName, lastName, pesel, id, street, city, postalCode) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
  });

  try {
    const { data } = await api({
      method: 'POST',
      url: '/user/register',
      data: {
        email,
        password,
        firstName,
        lastName,
        pesel,
        id,
        street,
        city,
        postalCode,
      },
    });

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    console.log(data);
  } catch (err) {
    console.log(err.response);

    dispatch({
      type: USER_REGISTER_FAIL,
    });

    if (err.response === undefined) {
      dispatch(addAlert('Błąd połączenia z serwerem', 'error'));
    }
  }

  console.log('xd');
};

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

    dispatch({
      type: ALERT_REMOVE,
    });
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
    });

    if (err.response === undefined) {
      console.log('xd');
      dispatch(addAlert('Błąd połączenia z bazą', 'error'));
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

export const changePassword = (password) => async (dispatch) => {
  dispatch({
    type: USER_UPDATE_PASSWORD_REQUEST,
  });

  try {
    await api({
      method: 'PUT',
      url: '/user/change-password',
      data: {
        password,
      },
    });

    dispatch({
      type: USER_UPDATE_PASSWORD_SUCCESS,
    });

    dispatch(addAlert('Hasło zostało zmienione', 'success'));
  } catch (err) {
    dispatch({
      type: USER_UPDATE_PASSWORD_FAIL,
    });
    dispatch(addAlert('Wystąpił błąd podczas zmiany hasła', 'error'));
  }
};

export const userLogout = () => (dispatch) => {
  localStorage.removeItem('user');
  dispatch({
    type: USER_LOGIN_LOGOUT,
  });
};
