import { Menu } from "../Menu/menu";
import { Reviews } from "../Reviews/reviews";

export const Restaurant = ({ restaurant }) => {
  const { id, name, menu, reviews } = restaurant;
  return (
    <div key={id}>
      <h2>{name}</h2>
      <Menu menu={menu} />
      {reviews.length ? <Reviews reviews={reviews} /> : "Нет отзывов"}
    </div>
  );
};
