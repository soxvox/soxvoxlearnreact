import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getDish } from "./get-dish";
import { getMenu } from "./get-menu";

export const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: "dish",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getMenu.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
      })
      .addCase(getDish.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      }),
});

export const { selectRequestStatus } = dishSlice.selectors;

const selectDishSlice = (state) => state.dish;

export const {
  selectIds: selectMenuIds,
  selectById: selectDishById,
  selectTotal: selectDishesTotal,
} = entityAdapter.getSelectors(selectDishSlice);
