import { ReviewListItemContainer } from "./review-list-item-container";
import { ReviewForm } from "./review-form";

export const Reviews = ({ reviews, restaurantId }) => {
  return (
    <div>
      <h3>Review list</h3>
      <ul>
        {reviews.map((review) => (
          <ReviewListItemContainer key={review.id} review={review} />
        ))}
      </ul>
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};
