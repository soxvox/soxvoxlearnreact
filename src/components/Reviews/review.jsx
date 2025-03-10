export const Review = ({ review }) => {
  return (
    <li key={review.id}>
      {review.user} ({review.rating}): {review.text}
    </li>
  );
};
