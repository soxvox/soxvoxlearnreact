import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/slice";
import { ReviewListItem } from "./review-list-item";

export const ReviewListItemContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  if (!review) {
    return null;
  }

  const { user, rating, text } = review;

  return <ReviewListItem id={id} user={user} rating={rating} text={text} />;
};
