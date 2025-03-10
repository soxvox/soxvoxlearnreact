import { useState } from "react";
import { Tab } from "./tab";
import { Container } from "./container";

export const Tabs = ({ restaurants }) => {
  const [activeRestaurant, setActiveRestaurant] = useState(null);

  return (
    <>
      <ul>
        {restaurants.map((restaurant) => (
          <Tab
            key={restaurant.id}
            onClick={() => setActiveRestaurant(restaurant)}
            active={activeRestaurant && restaurant.id === activeRestaurant.id}
          >
            {restaurant.name}
          </Tab>
        ))}
      </ul>
      {activeRestaurant && <Container restaurant={activeRestaurant} />}
    </>
  );
};
