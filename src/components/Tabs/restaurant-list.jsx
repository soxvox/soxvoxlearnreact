import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurant/slice";
import { RestaurantTabContainer } from "./restaurant-tab-container";
import { Tabs } from "./tabs";
import { Outlet } from "react-router";
import { getRestaurants } from "../../redux/entities/restaurant/get-restaurants";
import { useRequest } from "../../redux/hooks/use-request";

export const RestaurantList = () => {
  const requestStatus = useRequest(getRestaurants);
  const restaurantsIds = useSelector(selectRestaurantsIds);

  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loading list...";
  }

  if (requestStatus === "rejected") {
    return "error";
  }

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
