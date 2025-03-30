import { ReviewListItemContainer } from "./review-list-item-container";

export const Reviews = ({ reviewsIds }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviewsIds.map((id) => (
          <ReviewListItemContainer key={id} id={id} />
        ))}
      </ul>
    </>
  );
};
