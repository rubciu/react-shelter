import { createSlice } from '@reduxjs/toolkit';

type User = {
  _id: string;
  name: string;
  email: string;
};

const initialState: User[] = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
