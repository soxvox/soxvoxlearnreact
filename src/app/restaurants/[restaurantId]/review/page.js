import { ReviewsContainer } from "../../../../components/Reviews/reviews-container";

const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;

  return <ReviewsContainer id={restaurantId} />;
};

export default ReviewsPage;
