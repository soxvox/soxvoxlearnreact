import { configureStore } from "@reduxjs/toolkit";
import { dishSlice } from "./entities/dish/slice";
import { cartSlice } from "./entities/cart/slice";
import { usersSlice } from "./entities/user/slice";
import { restaurantsSlice } from "./entities/restaurant/slice";
import { reviewsSlice } from "./entities/review/slice";
import { requestSlice } from "./entities/request/slice";

export const store = configureStore({
  reducer: {
    [dishSlice.name]: dishSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  },
});
