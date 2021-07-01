import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import userReducer from './reducers/userReducer';
import alertReducer from './reducers/alertReducer';
import loanReducer from './reducers/loanReducer';

const reducers = combineReducers({
  user: userReducer,
  alerts: alertReducer,
  newLoan: loanReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
