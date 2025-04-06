import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMenu = createAsyncThunk(
  "dish/getMenu",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${id}`
    );
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("no data");

      return;
    }

    return result;
  }
);
