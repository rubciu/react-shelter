import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

type User = {
  _id: string;
  name: string;
  email: string;
  authenticated: boolean;
};

const initialState: User = {
  _id: '',
  name: '',
  email: '',
  authenticated: false,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    signin: (state) => {
      state.authenticated = true;
    },
    signout: (state) => {
      state.authenticated = false;
    },
  },
});

export const { signin, signout } = userSlice.actions;

export const userIsAuthenticated = (state: RootState): boolean =>
  state.user.authenticated;

export default userSlice.reducer;
