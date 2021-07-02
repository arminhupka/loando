import { ALERT_ADD, ALERT_REMOVE } from '../actions/types';

const initialState = [];

const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ALERT_ADD: {
      return [payload];
    }
    case ALERT_REMOVE: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default alertReducer;
