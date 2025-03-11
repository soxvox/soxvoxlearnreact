import { useState } from "react";
import { TabListItem } from "./tab-list-item";
import { Restaurant } from "../Restaurant/restaurant";

export const RestaurantList = ({ restaurants }) => {
  const [activeRestaurant, setActiveRestaurant] = useState(null);

  return (
    <>
      <ul>
        {restaurants.map((restaurant) => (
          <TabListItem
            key={restaurant.id}
            onClick={() => setActiveRestaurant(restaurant)}
            active={activeRestaurant && restaurant.id === activeRestaurant.id}
          >
            {restaurant.name}
          </TabListItem>
        ))}
      </ul>
      {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
    </>
  );
};
