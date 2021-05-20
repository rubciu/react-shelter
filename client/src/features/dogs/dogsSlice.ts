import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

type Dog = {
  name: string;
  breed: string;
  age: number;
  addedBy: string;
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
});

export const { addDog } = dogsSlice.actions;
export const getDogs = (state: RootState) => state.dogs;

export default dogsSlice.reducer;
