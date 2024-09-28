import { combineReducers, createStore } from 'redux';
import acountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

const rootReducer = combineReducers({
  account: acountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
