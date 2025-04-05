import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/slice";
import { Dish } from "./dish";
import { useNavigate } from "react-router";
import { Button } from "../Button/button";
import { getDish } from "../../redux/entities/dish/get-dish";
import { useRequest } from "../../redux/hooks/use-request";

export const DishContainer = ({ id }) => {
  const requestStatus = useRequest(getDish, id);
  const dish = useSelector((state) => selectDishById(state, id));
  const navigate = useNavigate();

  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loading menu...";
  }

  //if (requestStatus === "rejected") {
  //  return "error";
  //}
  console.log(id);
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
