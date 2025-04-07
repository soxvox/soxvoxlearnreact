import { NavLink } from "react-router";
import classNames from "classnames";
import styles from "./restaurant-tab-container.module.css";

export const RestaurantTabContainer = ({ name, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames(isActive && styles.isActive)}
    >
      {name}
    </NavLink>
  );
};
