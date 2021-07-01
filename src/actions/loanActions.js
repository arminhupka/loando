import { NEW_LOAN_SETTINGS } from './types';

export const setNewLoan = (value, days) => (dispatch) => {
  dispatch({
    type: NEW_LOAN_SETTINGS,
    payload: {
      value,
      days,
    },
  });
};

export const takeNewLoan = () => async () => {};
