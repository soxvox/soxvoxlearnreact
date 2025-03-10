export const Dish = ({ dish }) => {
  return <li key={dish.id}>{dish.name}</li>;
};
