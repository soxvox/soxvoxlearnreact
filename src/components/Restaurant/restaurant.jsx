import { Link } from "react-router";
import { Outlet } from "react-router";

export const Restaurant = (restaurant) => {
  const { name } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Link to="menu">show menu</Link>
      <Link to="review">reviews</Link>
      <Outlet />
    </div>
  );
};
