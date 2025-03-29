import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurant/slice";
import { RestaurantTabContainer } from "./restaurant-tab-container";
import { Tabs } from "./tabs";
import { Outlet } from "react-router";

export const RestaurantList = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return (
    <>
      <Tabs>
        {restaurantsIds.map((id) => (
          <RestaurantTabContainer key={id} id={id} />
        ))}
      </Tabs>
      <Outlet />
    </>
  );
};
