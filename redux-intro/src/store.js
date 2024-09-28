import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

// auto combine our reducer cadd thunk middleware , devtools

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
