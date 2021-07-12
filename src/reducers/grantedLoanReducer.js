import { LOAN_TAKE_REQUEST, LOAN_TAKE_SUCCESS, LOAN_TAKE_FAIL, LOAN_TAKE_RESET } from '../actions/types';

const initialState = {
  data: null,
  isLoading: false,
};

const grantedLoanReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAN_TAKE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOAN_TAKE_SUCCESS: {
      return {
        data: payload,
        isLoading: false,
      };
    }
    case LOAN_TAKE_RESET: {
      return initialState;
    }
    case LOAN_TAKE_FAIL: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default grantedLoanReducer;
