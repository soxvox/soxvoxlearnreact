import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import { Button } from "../Button/button";

export const RestaurantTabContainer = ({ id, onClick, active }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

  return (
    <Button
      key={id}
      onClick={onClick}
      colorViewVariant={active ? "active" : undefined}
      sizeViewVariant="padding5"
    >
      {name}
    </Button>
  );
};
