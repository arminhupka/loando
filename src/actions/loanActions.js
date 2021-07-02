import api from '../utils/api';
import {
  NEW_LOAN_SETTINGS,
  LOAN_TAKE_SUCCESS,
  LOAN_LIST_REQUEST,
  LOAN_LIST_SUCCESS,
  LOAN_LIST_ADD,
  LOAN_PAY_SUCCESS,
  LOAN_PAY_REQUEST,
  LOAN_DETAILS_SUCCESS,
} from './types';

export const setNewLoan = (value, days) => (dispatch) => {
  dispatch({
    type: NEW_LOAN_SETTINGS,
    payload: {
      value,
      days,
    },
  });
};

export const takeNewLoan = () => async (dispatch, getState) => {
  const { token } = await getState().user.data;

  try {
    const { data } = await api({
      method: 'POST',
      url: '/loan/new',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        value: 1000,
        days: 30,
      },
    });

    dispatch({
      type: LOAN_LIST_ADD,
      payload: data,
    });
  } catch (err) {
    console.log(err.response);
  }

  dispatch({
    type: LOAN_TAKE_SUCCESS,
    payload: Math.random(),
  });
};

export const getUserLoans = () => async (dispatch, getState) => {
  const { token } = await getState().user.data;

  dispatch({
    type: LOAN_LIST_REQUEST,
  });

  try {
    const { data } = await api({
      method: 'GET',
      url: '/loan/all',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: LOAN_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err.response);
  }
};

export const getLoanDetails = (id) => async (dispatch, getState) => {
  const { token } = await getState().user.data;

  try {
    const { data } = await api({
      method: 'GET',
      url: `/loan/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: LOAN_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err.response);
  }
};

export const payLoan = (id, value) => async (dispatch, getState) => {
  const { token } = await getState().user.data;

  dispatch({
    type: LOAN_PAY_REQUEST,
  });

  try {
    const { data } = await api({
      method: 'PUT',
      url: '/loan/pay',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        id,
        value,
      },
    });

    dispatch({
      type: LOAN_PAY_SUCCESS,
      payload: data,
    });

    dispatch({
      type: LOAN_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err.response);
  }
};
