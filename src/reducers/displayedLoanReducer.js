import { LOAN_DETAILS_FAIL, LOAN_DETAILS_REQUEST, LOAN_DETAILS_SUCCESS } from '../actions/types';

const initialState = {
  data: {},
  isLoading: true,
};

const displayedLoanReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAN_DETAILS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOAN_DETAILS_SUCCESS: {
      return {
        isLoading: false,
        data: payload,
      };
    }
    case LOAN_DETAILS_FAIL: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default displayedLoanReducer;
