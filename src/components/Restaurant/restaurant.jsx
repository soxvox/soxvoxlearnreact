import { Link } from "react-router";
import { Outlet } from "react-router";

export const Restaurant = (restaurant) => {
  const { id, name } = restaurant;

  return (
    <div key={id}>
      <h2>{name}</h2>
      <Link to="menu">show menu</Link>
      <Link to="review">reviews</Link>
      <Outlet />
    </div>
  );
};
