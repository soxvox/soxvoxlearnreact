import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import { NavLink } from "react-router";
import classNames from "classnames";
import styles from "./restaurant-tab-container.module.css";

export const RestaurantTabContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

  return (
    <NavLink
      to={id}
      className={({ isActive }) => classNames(isActive && styles.isActive)}
    >
      {name}
    </NavLink>
  );
};
