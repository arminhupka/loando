import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_LOGOUT } from '../actions/types';

const lsUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

const initial = {
  user: lsUser,
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
        user: payload,
        isLoading: false,
      };
    }
    case USER_LOGIN_LOGOUT: {
      return initial;
    }
    default: {
      return state;
    }
  }
};

export default userReducer;