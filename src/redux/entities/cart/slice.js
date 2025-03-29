import { createSlice, createSelector } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",

  initialState: {},

  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },

    removeFromCart: (state, { payload }) => {
      if (!state[payload]) {
        return state;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] <= 0) {
        delete state[payload];
      }
    },
  },

  selectors: {
    selectCartItems: (state) =>
      Object.keys(state).reduce((acc, id) => {
        acc.push({ id, amount: state[id] });

        return acc;
      }, []),
    selectAmountByDishId: (state, id) => state[id],
  },
});

export const { selectAmountByDishId } = cartSlice.selectors;
export const { addToCart, removeFromCart } = cartSlice.actions;

const selectCartSlice = (state) => state.cartSlice;

export const selectCartItems = createSelector([selectCartSlice], (state) =>
  Object.keys(state).reduce((acc, id) => {
    acc.push({ id, amount: state[id] });

    return acc;
  }, [])
);
