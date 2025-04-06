import { Restaurant } from "./restaurant";
import { useGetRestaurantQuery } from "../../redux/services/api";

export const RestaurantContainer = ({ id }) => {
  const { data, isLoading } = useGetRestaurantQuery(id);

  if (isLoading) {
    return "loading restaurant...";
  }

  if (!data) {
    return null;
  }

  const { name, menu, reviews } = data;

  return <Restaurant name={name} />;
};
