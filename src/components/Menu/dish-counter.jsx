import { Counter } from "../Count/counter";
import { useDishCounter } from "./use-dish-counter";

export const DishCounter = ({ dishId }) => {
  const { count, increment, decrement } = useDishCounter(dishId);

  return <Counter count={count} increment={increment} decrement={decrement} />;
};
