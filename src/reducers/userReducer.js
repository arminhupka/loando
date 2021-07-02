import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_LOGOUT,
  LOAN_TAKE_SUCCESS,
  LOAN_LIST_REQUEST,
  LOAN_LIST_SUCCESS,
  LOAN_LIST_ADD,
} from '../actions/types';

const initial = {
  data: null,
  loans: [],
  isLoading: false,
};

const userReducer = (state = initial, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    }
    case USER_LOGIN_LOGOUT: {
      return {
        ...initial,
      };
    }
    case LOAN_TAKE_SUCCESS: {
      return {
        ...state,
      };
    }
    case LOAN_LIST_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOAN_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        loans: payload,
      };
    }
    case LOAN_LIST_ADD: {
      return {
        ...state,
        loans: [...state.loans, payload],
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
