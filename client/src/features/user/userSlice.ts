import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

type User = {
  _id: string;
  name: string;
  email: string;
  authenticated: boolean;
};

interface UserState {
  user: User;
  status: string;
  error: string | null;
}

const initialState: UserState = {
  user: {
    _id: '',
    name: '',
    email: '',
    authenticated: false,
  },
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    signin: (state) => {
      state.user.authenticated = true;
    },
    signout: (state) => {
      state.user.authenticated = false;
    },
  },
});

export const { signin, signout } = userSlice.actions;

export const userIsAuthenticated = (state: RootState): boolean =>
  state.user.user.authenticated;

export default userSlice.reducer;
