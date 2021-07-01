import { ALERT_ADD } from '../actions/types';

const initialState = [];

const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ALERT_ADD: {
      return [...state, payload];
    }
    default: {
      return state;
    }
  }
};

export default alertReducer;
