import { ReviewListItem } from "./review-list-item";
import { ReviewForm } from "./review-form";

export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <ReviewListItem key={review.id} review={review} />
        ))}
      </ul>
      <ReviewForm />
    </>
  );
};
