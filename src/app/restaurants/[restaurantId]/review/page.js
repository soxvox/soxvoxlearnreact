import { ReviewsContainer } from "../../../../components/Reviews/reviews-container";

const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;
  console.log(`ReviewsPage ${restaurantId}`);
  return <ReviewsContainer id={restaurantId} />;
};

export default ReviewsPage;
