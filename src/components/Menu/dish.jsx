import { DishCounter } from "./dish-counter";
import { use } from "react";
import { UserContext } from "../UserContext";
import Link from "next/link";

export const Dish = (dish) => {
  const { user } = use(UserContext);

  return (
    <div>
      <Link href={`/dish/${dish.id}`}>{dish.name}</Link>
      {user && <DishCounter dishId={dish.id} />}
    </div>
  );
};
