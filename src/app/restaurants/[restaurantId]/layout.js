import { RestaurantContainer } from "../../../components/Restaurant/restaurant-container";

const RestaurantLayout = async ({ children, params }) => {
  const { restaurantId } = await params;

  return (
    <RestaurantContainer id={restaurantId}>{children}</RestaurantContainer>
  );
};

export default RestaurantLayout;
