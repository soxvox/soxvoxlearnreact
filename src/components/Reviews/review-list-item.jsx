import styles from "./review-list-item.module.css";

export const ReviewListItem = ({ review }) => {
  const { id, user, rating, text } = review;
  return (
    <li key={id} className={styles.reviewListItem}>
      {user} ({rating}): {text}
    </li>
  );
};
