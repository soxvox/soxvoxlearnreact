import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsTotal } from "./slice";

export const getRestaurant = createAsyncThunk(
  "restaurants/getRestaurant",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/restaurants/${id}`);
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("no data");

      return;
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return !selectRestaurantsTotal(getState());
    },
  }
);
