import { Dish } from "./dish";
import { useNavigate } from "react-router";
import { Button } from "../Button/button";
import { useGetDishByIdQuery } from "../../redux/services/api";

export const DishContainer = ({ id }) => {
  const { data, isLoading } = useGetDishByIdQuery(id);
  const navigate = useNavigate();

  if (isLoading) {
    return "loading dish...";
  }

  if (!data) {
    return <div>dish not found</div>;
  }

  const { name } = data;

  return (
    <div>
      <Dish id={id} name={name} />
      <Button onClick={() => navigate(-1)}>go back</Button>
    </div>
  );
};
