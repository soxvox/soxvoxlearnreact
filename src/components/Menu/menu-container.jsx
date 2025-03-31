import { useSelector } from "react-redux";
import { Menu } from "./menu";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";

export const MenuContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant.menu.length) {
    return <div>menu not present. just give us a call!</div>;
  }

  return <Menu menuIds={restaurant.menu} />;
};
