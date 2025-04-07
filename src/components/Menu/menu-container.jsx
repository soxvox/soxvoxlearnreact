import { Menu } from "./menu";
import { useGetMenuByRestaurantIdQuery } from "../../redux/services/api";

export const MenuContainer = ({ restaurantId }) => {
  const { data, isLoading } = useGetMenuByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return <div>loading menu is in progress...</div>;
  }

  if (!data) {
    return <div>menu not present. just give us a call!</div>;
  }

  return <Menu menu={data} />;
};
