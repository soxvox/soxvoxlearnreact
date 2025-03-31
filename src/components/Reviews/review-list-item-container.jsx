import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/slice";
import { selectUserById } from "../../redux/entities/user/slice";
import { ReviewListItem } from "./review-list-item";

export const ReviewListItemContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  const user = useSelector((state) => selectUserById(state, review.userId));

  if (!review || !user) {
    return null;
  }

  const { rating, text } = review;

  return (
    <ReviewListItem id={id} user={user.name} rating={rating} text={text} />
  );
};
