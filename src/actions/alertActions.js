import { ALERT_ADD, ALERT_REMOVE } from './types';

export const addAlert = (msg, type) => (dispatch) => {
  const id = Math.floor(Math.random() * 10000);

  dispatch({
    type: ALERT_REMOVE,
  });

  dispatch({
    type: ALERT_ADD,
    payload: {
      id,
      msg,
      type,
    },
  });
};
