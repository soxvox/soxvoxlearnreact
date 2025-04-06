import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import { Restaurant } from "./restaurant";
import { getRestaurant } from "../../redux/entities/restaurant/get-restaurant";
import { useRequest } from "../../redux/hooks/use-request";

export const RestaurantContainer = ({ id }) => {
  const requestStatus = useRequest(getRestaurant, id);
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loading restaurant...";
  }

  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return <Restaurant name={name} />;
};
