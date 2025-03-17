import { useState } from "react";

export const useDishCounter = ({ defaultValue, min = 0, max = 5 }) => {
  const [count, setCount] = useState(defaultValue);

  const increment = () => setCount(Math.min(count + 1, max));
  const decrement = () => setCount(Math.max(count - 1, min));

  return {
    count,
    increment,
    decrement,
  };
};
