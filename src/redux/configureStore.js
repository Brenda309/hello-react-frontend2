import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting';

const store = configureStore({
  reducer: {
    message: greetingReducer,
  },
});

export default store;
