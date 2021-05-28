import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import type { RootState } from '../../store';

type Dog = {
  name: string;
  breed: string;
  age: number;
  addedBy: string;
};

interface DogState {
  dogs: Dog[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
}

const initialState: DogState = {
  dogs: [],
  status: 'idle',
  error: undefined,
};

export const fetchDogs = createAsyncThunk('dogs/fetchDogs', async () => {
  try {
    const response = await axios.get<Dog[]>('http://localhost:3000/dogs');
    return response.data;
  } catch (error: unknown) {
    return new Promise((resolve, reject) => reject(error));
  }
});

export const dogsSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {
    addDog: {
      reducer(state, action: PayloadAction<Dog>) {
        state.dogs.push(action.payload);
      },
      prepare(name, breed, age, addedBy) {
        return {
          payload: {
            name,
            breed: breed.toLowerCase(),
            age,
            addedBy,
          },
        };
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDogs.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchDogs.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.dogs = state.dogs.concat(action.payload);
    });
    builder.addCase(fetchDogs.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const { addDog } = dogsSlice.actions;

export const selectAllDogs = (state: RootState) => state.dogs.dogs;

export default dogsSlice.reducer;
