import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

import type { RootState } from "../../store";

type Dog = {
  _id: string;
  name: string;
  breed: string;
  age: number;
  addedBy: string;
};

export type DogInput = Omit<Dog, "_id">;

const dogsAdapter = createEntityAdapter<Dog>({
  selectId: (dog) => dog._id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const fetchDogs = createAsyncThunk("dogs/fetchDogs", async () => {
  try {
    const response = await axios.get<Dog[]>("http://localhost:3000/dogs");
    return response.data;
  } catch (error: unknown) {
    return new Promise((resolve, reject) => reject(error));
  }
});

export const createDog = createAsyncThunk(
  "dogs/createDog",
  async (body: DogInput) => {
    try {
      const response = await axios.post<Dog>(
        "http://localhost:3000/dogs",
        body
      );
      return response.data;
    } catch (error) {
      return new Promise((resolve, reject) => reject(error));
    }
  }
);

export const dogsSlice = createSlice({
  name: "dogs",
  initialState: dogsAdapter.getInitialState({ status: "idle", error: null }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDogs.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchDogs.fulfilled, (state, action) => {
      state.status = "succeeded";
      dogsAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchDogs.rejected, (state, action) => {
      state.status = "failed";
    });
    builder.addCase(createDog.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(createDog.fulfilled, (state, action) => {
      state.status = "succeeded";
      dogsAdapter.addOne(state, action.payload);
    });
    builder.addCase(createDog.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export const dogsSelectors = dogsAdapter.getSelectors();

export const selectAllDogs = (state: RootState) =>
  dogsSelectors.selectAll(state.dogs);

export default dogsSlice.reducer;
