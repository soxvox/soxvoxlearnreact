import { configureStore } from "@reduxjs/toolkit";
import { dishesSlice } from "./entities/dish/slice";
import { cartSlice } from "./entities/cart/slice";
import { usersSlice } from "./entities/user/slice";
import { restaurantsSlice } from "./entities/restaurant/slice";
import { reviewsSlice } from "./entities/review/slice";

export const store = configureStore({
  reducer: {
    [dishesSlice.name]: dishesSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
  },
});
