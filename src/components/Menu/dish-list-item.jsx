import { Counter } from "../Count/counter";
import { useDishCounter } from "./use-dish-counter";

export const DishListItem = ({ dish }) => {
  const { count, increment, decrement } = useDishCounter({
    defaultValue: 0,
    min: 0,
    max: 5,
  });

  return (
    <li key={dish.id} style={{ paddingBottom: "300px" }}>
      {dish.name}
      <Counter count={count} increment={increment} decrement={decrement} />
    </li>
  );
};
