"use client";

import { RestaurantTabContainer } from "../Tabs/restaurant-tab-container";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantsPageLayout = ({ children }) => {
  const { data: restaurants, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return "loading restaurants...";
  }

  if (isError) {
    return "error";
  }

  return (
    <section>
      <nav>
        {restaurants.map(({ id, name }) => (
          <RestaurantTabContainer key={id} id={id} name={name} />
        ))}
      </nav>
      {children}
    </section>
  );
};
