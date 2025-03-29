import { DishCounter } from "./dish-counter";
import styles from "./dish-list-item.module.css";
import { use } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router";

export const DishListItem = (dish) => {
  const { user } = use(UserContext);

  return (
    <li className={styles.dishListItem}>
      <Link to={`/dish/${dish.id}`}>{dish.name}</Link>
      {user && <DishCounter dishId={dish.id} />}
    </li>
  );
};
