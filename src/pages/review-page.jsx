import { ReviewsContainer } from "../components/Reviews/reviews-container";
import { useParams } from "react-router";

export const ReviewPage = () => {
  const { restaurantId } = useParams();

  return <ReviewsContainer id={restaurantId} />;
};
