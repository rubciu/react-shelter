import { configureStore } from '@reduxjs/toolkit';
import dogsReducer from './dogs/dogsSlice';

const store = configureStore({
  reducer: {
    dogs: dogsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
