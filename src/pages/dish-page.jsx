import { useParams } from "react-router";
import { DishContainer } from "../components/Menu/dish-container";

export const DishPage = () => {
  const { dishId } = useParams();

  return <DishContainer id={dishId} />;
};
