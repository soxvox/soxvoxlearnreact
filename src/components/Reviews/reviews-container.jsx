import { useSelector } from "react-redux";
import { Reviews } from "./reviews";
import { selectReviewsIds } from "../../redux/entities/review/slice";
import { getReviews } from "../../redux/entities/review/get-reviews";
import { selectUsersIds } from "../../redux/entities/user/slice";
import { getUsers } from "../../redux/entities/user/get-users";
import { useRequest } from "../../redux/hooks/use-request";

export const ReviewsContainer = ({ restaurantId }) => {
  const requestReviewsStatus = useRequest(getReviews, restaurantId);
  const reviews = useSelector((state) => selectReviewsIds(state, restaurantId));
  const requestUsersStatus = useRequest(getUsers);
  const users = useSelector(selectUsersIds);

  if (requestReviewsStatus === "idle" || requestReviewsStatus === "pending") {
    return "loading reviews...";
  }

  if (
    requestReviewsStatus === "rejected" ||
    requestUsersStatus === "rejected"
  ) {
    return "error";
  }

  if (!reviews.length) {
    return <div>no reviews. be first!</div>;
  }

  return <Reviews reviewsIds={reviews} />;
};
