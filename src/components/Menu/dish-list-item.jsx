import { Counter } from "../Count/counter";
import { useDishCounter } from "./use-dish-counter";
import styles from "./dish-list-item.module.css";
import { use } from "react";
import { UserContext } from "../UserContext";

export const DishListItem = ({ dish }) => {
  const { user } = use(UserContext);
  const { count, increment, decrement } = useDishCounter({
    defaultValue: 0,
    min: 0,
    max: 5,
  });

  return (
    <li key={dish.id} className={styles.dishListItem}>
      <div>{dish.name}</div>
      {user && (
        <Counter count={count} increment={increment} decrement={decrement} />
      )}
    </li>
  );
};
