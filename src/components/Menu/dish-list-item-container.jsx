import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/slice";
import { Dish } from "./dish";
import styles from "./dish-list-item.module.css";

export const DishListItemContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }

  const { name } = dish;

  return (
    <li key={id} className={styles.dishListItem}>
      <Dish id={id} name={name} />
    </li>
  );
};
