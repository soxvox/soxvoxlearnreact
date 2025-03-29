import styles from "./review-list-item.module.css";

export const ReviewListItem = (review) => {
  const { user, rating, text } = review;
  return (
    <li className={styles.reviewListItem}>
      {user} ({rating}): {text}
    </li>
  );
};
