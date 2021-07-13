import { LOAN_TAKE_REQUEST, LOAN_TAKE_SUCCESS, LOAN_TAKE_FAIL, LOAN_TAKE_RESET, LOAN_TAKE_CLEAR } from '../actions/types';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
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
      return {
        ...initialState,
        error: payload,
      };
    }
    case LOAN_TAKE_CLEAR: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default grantedLoanReducer;
