import { Menu } from "../Menu/menu";
import { Reviews } from "../Reviews/reviews";

export const Restaurant = ({ restaurant }) => {
  return (
    <div key={restaurant.id}>
      <h2>{restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      {restaurant.reviews.length ? (
        <Reviews reviews={restaurant.reviews} />
      ) : (
        "Нет отзывов"
      )}
    </div>
  );
};
