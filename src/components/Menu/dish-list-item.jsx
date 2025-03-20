import { Counter } from "../Count/counter";
import { useDishCounter } from "./use-dish-counter";
import styles from "./dish-list-item.module.css";

export const DishListItem = ({ dish }) => {
  const { count, increment, decrement } = useDishCounter({
    defaultValue: 0,
    min: 0,
    max: 5,
  });

  return (
    <li key={dish.id} className={styles.dishListItem}>
      <div>{dish.name}</div>
      <Counter count={count} increment={increment} decrement={decrement} />
    </li>
  );
};
