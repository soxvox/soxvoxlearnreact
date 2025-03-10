import { Review } from "./review";

export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
    </>
  );
};
