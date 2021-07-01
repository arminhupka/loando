import { NEW_LOAN_SETTINGS } from '../actions/types';

const initialState = {
  value: 1000,
  days: 20,
};

const loanReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case NEW_LOAN_SETTINGS: {
      return payload;
    }
    default: {
      return state;
    }
  }
};

export default loanReducer;
