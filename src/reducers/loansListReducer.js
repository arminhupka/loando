import { LOAN_LIST_REQUEST, LOAN_LIST_SUCCESS, LOAN_LIST_FAIL } from '../actions/types';

const initialState = {
  data: [],
  isLoading: false,
};

const loansListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAN_LIST_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOAN_LIST_SUCCESS: {
      return {
        data: payload,
        isLoading: false,
      };
    }
    case LOAN_LIST_FAIL: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default loansListReducer;
