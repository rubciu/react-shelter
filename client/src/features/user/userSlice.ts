import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '../../store';

type User = {
  _id: string | undefined;
  name: string;
  email: string | undefined;
  authenticated: boolean;
};

export type UserInput = {
  email: string;
  password: string;
  name?: string;
  age?: string;
};

type UserOutput = {
  user: {
    _id: string;
    age: number;
    name: string;
    email: string;
  };
  token: string;
};

interface UserState {
  user: User;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
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

export const addNewUser = createAsyncThunk(
  'user/addNewUser',
  async (body: UserInput) => {
    try {
      const response = await axios.post<UserOutput>(
        'http://localhost:3000/users',
        body
      );
      return response.data;
    } catch (error) {
      // TODO: Handle error
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(addNewUser.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(addNewUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = {
        ...state.user,
        _id: action.payload?.user._id,
        email: action.payload?.user.email,
        authenticated: true,
      };
    });
    builder.addCase(addNewUser.rejected, (state, action) => {
      state.status = 'failed';
    });
  },
});

export const { signin, signout } = userSlice.actions;

export const userIsAuthenticated = (state: RootState): boolean =>
  state.user.user.authenticated;

export default userSlice.reducer;
