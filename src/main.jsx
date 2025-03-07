import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

function renderMenu(menu) {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map((data) => (
          <li key={data.id}>{data.name}</li>
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
        {reviews.map((data) => (
          <li key={data.id}>
            {data.user}: {data.text}
          </li>
        ))}
      </ul>
    </>
  );
}

function renderRestaurant(restaurant) {
  return (
    <div key={restaurant.id}>
      <h1>{restaurant.name}</h1>
      {renderMenu(restaurant.menu)}
      {renderReviews(restaurant.reviews)}
    </div>
  );
}

reactRoot.render(
  <ul className="someClass" style={{ color: "red" }}>
    {restaurants.map((data) => renderRestaurant(data))}
  </ul>
);
