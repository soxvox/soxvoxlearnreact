import { RestaurantTabContainer } from "./restaurant-tab-container";
import { Tabs } from "./tabs";
import { Outlet } from "react-router";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantList = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return "loading list...";
  }

  if (isError) {
    return "error";
  }

  return (
    <>
      <Tabs>
        {data.map(({ id, name }) => (
          <RestaurantTabContainer
            key={id}
            to={`/restaurants/${id}`}
            name={name}
          />
        ))}
      </Tabs>
      <Outlet />
    </>
  );
};
