import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/slice";
import { DishListItem } from "./dish-list-item";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return <div>dish not found</div>;
  }

  const { name } = dish;

  return <DishListItem id={id} name={name} />;
};
