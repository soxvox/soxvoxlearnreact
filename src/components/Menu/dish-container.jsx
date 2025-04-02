import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/slice";
import { Dish } from "./dish";
import { useNavigate } from "react-router";
import { Button } from "../Button/button";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const navigate = useNavigate();

  if (!dish) {
    return <div>dish not found</div>;
  }

  const { name } = dish;

  return (
    <div>
      <Dish id={id} name={name} />
      <Button onClick={() => navigate(-1)}>go back</Button>
    </div>
  );
};
