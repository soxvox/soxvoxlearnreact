import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Reviews } from "./reviews";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";

export const ReviewsContainer = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant.reviews.length) {
    return <div>no reviews. be first!</div>;
  }

  return <Reviews reviewsIds={restaurant.reviews} />;
};
