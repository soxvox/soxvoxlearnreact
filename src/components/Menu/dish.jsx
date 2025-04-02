import { DishCounter } from "./dish-counter";
import { use } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router";

export const Dish = (dish) => {
  const { user } = use(UserContext);

  return (
    <div>
      <Link to={`/dish/${dish.id}`}>{dish.name}</Link>
      {user && <DishCounter dishId={dish.id} />}
    </div>
  );
};
