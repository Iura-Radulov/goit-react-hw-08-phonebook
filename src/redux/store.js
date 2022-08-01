import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactApi } from './contactApiSlice';
import { filterReducer } from './contactSlice';

const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactApi.middleware],
});

setupListeners(store.dispatch);

export default store;
