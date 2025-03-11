import { ReviewListItem } from "./review-list-item";

export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <ReviewListItem key={review.id} review={review} />
        ))}
      </ul>
    </>
  );
};
