import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "../../store";

type User = {
  _id: string | undefined;
  name: string | undefined;
  email: string | undefined;
  authenticated: boolean;
};

export type UserInput = {
  name: string;
  email: string;
  password: string;
};

export type UserOutput = {
  user: {
    _id: string;
    age: number;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
  token: string;
};

interface UserState {
  user: User;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  user: {
    _id: "",
    name: "",
    email: "",
    authenticated: false,
  },
  status: "idle",
  error: null,
};

export const addNewUser = createAsyncThunk(
  "user/addNewUser",
  async (body: UserInput, thunkAPI) => {
    try {
      const response = await axios.post<UserOutput>(
        "http://localhost:3000/users",
        body
      );
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
    }
  }
);

const userSlice = createSlice({
  name: "users",
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
      state.status = "loading";
    });
    builder.addCase(addNewUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = {
        ...state.user,
        _id: action.payload?.user._id,
        name: action.payload?.user.name,
        email: action.payload?.user.email,
        authenticated: true,
      };
    });
    builder.addCase(addNewUser.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export const { signin, signout } = userSlice.actions;

export const userIsAuthenticated = (state: RootState): boolean =>
  state.user.user.authenticated;

export const getUser = (state: RootState): User => state.user.user;

export default userSlice.reducer;
