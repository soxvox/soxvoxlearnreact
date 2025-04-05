import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "./slice";

export const getDish = createAsyncThunk(
  "dish/getDish",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${id}`);
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("no data");

      return;
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return !selectDishById(getState()).includes(id);
    },
  }
);
