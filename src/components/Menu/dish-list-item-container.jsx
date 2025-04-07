import { Dish } from "./dish";
import styles from "./dish-list-item.module.css";

export const DishListItemContainer = ({ dish }) => {
  return (
    <li className={styles.dishListItem}>
      <Dish id={dish.id} name={dish.name} />
    </li>
  );
};
