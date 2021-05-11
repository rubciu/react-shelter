import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';

type Dog = {
  name: string;
};

interface DogState {
  dogs: Dog[];
}

const initialState: DogState = {
  dogs: [],
};

export const dogsSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {
    addDog: (state, action: PayloadAction<Dog>) => {
      state.dogs = [...state.dogs, action.payload];
    },
  },
});

export const { addDog } = dogsSlice.actions;
export const selectDogs = (state: RootState) => state.dogs;

export default dogsSlice.reducer;
