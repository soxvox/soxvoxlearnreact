import { Reviews } from "./reviews";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/services/api";

export const ReviewsContainer = ({ id }) => {
  const { data, isLoading } = useGetReviewsByRestaurantIdQuery(id);

  if (isLoading) {
    return <div>be patient...</div>;
  }

  if (!data) {
    return <div>no reviews. be first!</div>;
  }

  return <Reviews reviews={data} restaurantId={id} />;
};
