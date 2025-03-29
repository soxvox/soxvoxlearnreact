import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurant/slice";
import { RestaurantContainer } from "../Restaurant/restaurant-container";
import { RestaurantTabContainer } from "./restaurant-tab-container";
import { Tabs } from "./tabs";

export const RestaurantList = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantsIds[0]
  );

  return (
    <>
      <Tabs>
        {restaurantsIds.map((id) => (
          <RestaurantTabContainer
            key={id}
            id={id}
            onClick={() => setActiveRestaurantId(id)}
            active={id === activeRestaurantId}
          />
        ))}
      </Tabs>
      {activeRestaurantId && (
        <RestaurantContainer key={activeRestaurantId} id={activeRestaurantId} />
      )}
    </>
  );
};
