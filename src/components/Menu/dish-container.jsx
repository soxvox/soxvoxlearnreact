import { Dish } from "./dish";
import { useGetDishByIdQuery } from "../../redux/services/api";

export const DishContainer = ({ id }) => {
  const { data, isLoading } = useGetDishByIdQuery(id);

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
    </div>
  );
};
