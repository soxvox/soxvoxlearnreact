import { Menu } from "../Menu/menu";
import { Reviews } from "../Reviews/reviews";
import { ReviewForm } from "../Reviews/review-form";

export const Restaurant = (restaurant) => {
  const { id, name, menuIds, reviewsIds } = restaurant;

  return (
    <div key={id}>
      <h2>{name}</h2>
      {menuIds.length ? <Menu menuIds={menuIds} /> : "empty menu"}
      {reviewsIds.length ? <Reviews reviewsIds={reviewsIds} /> : "Нет отзывов"}
      <ReviewForm />
    </div>
  );
};
