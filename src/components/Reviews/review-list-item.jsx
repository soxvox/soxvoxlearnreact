import styles from "./review-list-item.module.css";
import { User } from "../User/user";

export const ReviewListItem = (review) => {
  const { userId, rating, text } = review;
  return (
    <li className={styles.reviewListItem}>
      <User id={userId} /> ({rating}): {text}
    </li>
  );
};
