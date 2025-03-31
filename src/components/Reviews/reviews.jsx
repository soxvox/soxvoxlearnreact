import { ReviewListItemContainer } from "./review-list-item-container";
import { ReviewForm } from "./review-form";

export const Reviews = ({ reviewsIds }) => {
  return (
    <div>
      <h3>Review list</h3>
      <ul>
        {reviewsIds.map((id) => (
          <ReviewListItemContainer key={id} id={id} />
        ))}
      </ul>
      <ReviewForm />
    </div>
  );
};
