import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from '../actions/types';

const initial = {
  data: null,
  isLoading: false,
};

const userReducer = (state = initial, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REGISTER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case USER_REGISTER_SUCCESS: {
      return {
        isLoading: false,
        data: payload,
      };
    }
    case USER_REGISTER_FAIL: {
      return initial;
    }
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
    default: {
      return state;
    }
  }
};

export default userReducer;
