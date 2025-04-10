import Link from "next/link";
import classNames from "classnames";
import styles from "./restaurant-tab-container.module.css";

export const RestaurantTabContainer = ({ name, id }) => {
  return <Link href={`/restaurants/${id}`}>{name}</Link>;
};
