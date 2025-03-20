export const ReviewListItem = ({ review }) => {
  const { id, user, rating, text } = review;
  return (
    <li key={id} style={{ paddingBottom: "300px" }}>
      {user} ({rating}): {text}
    </li>
  );
};
