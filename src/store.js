import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import userReducer from './reducers/userReducer';
import alertReducer from './reducers/alertReducer';
import loanReducer from './reducers/loanReducer';
import grantedLoanReducer from './reducers/grantedLoanReducer';
import loansListReducer from './reducers/loansListReducer';
import displayedLoanReducer from './reducers/displayedLoanReducer';

const reducers = combineReducers({
  user: userReducer,
  alerts: alertReducer,
  newLoan: loanReducer,
  grantedLoan: grantedLoanReducer,
  loansList: loansListReducer,
  displayedLoan: displayedLoanReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: 'alerts, grantedLoan, loansList, displayedLoan',
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

const persistor = persistStore(store);

export default { store, persistor };
