import { configureStore } from '@reduxjs/toolkit';
import dogsReducer from '../features/dogs/dogsSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    dogs: dogsReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
