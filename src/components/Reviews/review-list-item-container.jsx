import { ReviewListItem } from "./review-list-item";

export const ReviewListItemContainer = ({ review }) => {
  if (!review) {
    return null;
  }

  const { id, rating, text, userId } = review;

  return <ReviewListItem id={id} userId={userId} rating={rating} text={text} />;
};
