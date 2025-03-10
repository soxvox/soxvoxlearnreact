import { Counter } from "../Count/counter";

export const Dish = ({ dish }) => {
  return (
    <li key={dish.id}>
      {dish.name}
      <Counter min={0} max={5} defaultValue={0} />
    </li>
  );
};
