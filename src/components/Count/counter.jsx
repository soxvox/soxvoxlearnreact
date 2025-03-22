import { Button } from "../Button/button";

export const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <Button onClick={decrement}>-</Button>
      {count}
      <Button onClick={increment}>+</Button>
    </div>
  );
};
