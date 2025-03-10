export const Review = ({ review }) => {
  const { id, user, rating, text } = review;
  return (
    <li key={id}>
      {user} ({rating}): {text}
    </li>
  );
};
