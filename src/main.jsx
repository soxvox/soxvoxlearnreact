import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

function renderMenu(menu) {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
}

function renderReviews(reviews) {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map(({ id, user, text, rating }) => (
          <li key={id}>
            {user} ({rating}): {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function renderRestaurant(restaurant) {
  return (
    <div key={restaurant.id}>
      <h2>{restaurant.name}</h2>
      {renderMenu(restaurant.menu)}
      {renderReviews(restaurant.reviews)}
    </div>
  );
}

reactRoot.render(restaurants.map((data) => renderRestaurant(data)));
