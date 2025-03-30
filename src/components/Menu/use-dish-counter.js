import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectAmountByDishId,
} from "../../redux/entities/cart/slice";

export const useDishCounter = (id) => {
  const dispatch = useDispatch();

  const count = useSelector((state) => selectAmountByDishId(state, id)) || 0;

  const increment = useCallback(() => dispatch(addToCart(id)), [dispatch, id]);

  const decrement = useCallback(
    () => dispatch(removeFromCart(id)),
    [dispatch, id]
  );

  return {
    count,
    increment,
    decrement,
  };
};
