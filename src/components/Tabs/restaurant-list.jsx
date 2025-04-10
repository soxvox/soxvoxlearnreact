import { RestaurantTabContainer } from "./restaurant-tab-container";
import { Tabs } from "./tabs";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantList = ({ children }) => {
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
          <RestaurantTabContainer key={id} id={id} name={name} />
        ))}
      </Tabs>
      {children}
    </>
  );
};
