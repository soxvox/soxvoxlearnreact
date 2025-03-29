import { DishCounter } from "./dish-counter";
import styles from "./dish-list-item.module.css";
import { use } from "react";
import { UserContext } from "../UserContext";

export const DishListItem = (dish) => {
  const { user } = use(UserContext);

  return (
    <li className={styles.dishListItem}>
      <div>{dish.name}</div>
      {user && <DishCounter dishId={dish.id} />}
    </li>
  );
};
