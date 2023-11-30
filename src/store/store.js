import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './orderSlice';
import navigationReducer from './navigationSlice';

export const store = configureStore({
  reducer: {
    order: orderReducer,
    navigation: navigationReducer
  }
});