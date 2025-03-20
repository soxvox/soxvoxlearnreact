import { useState, useCallback } from "react";

export const useDishCounter = ({ defaultValue = 0, min = 0, max = 5 }) => {
  const [count, setCount] = useState(defaultValue);

  const increment = useCallback(
    () => setCount((value) => Math.min(value + 1, max)),
    [max]
  );

  const decrement = useCallback(
    () => setCount((value) => Math.max(value - 1, min)),
    [min]
  );

  return {
    count,
    increment,
    decrement,
  };
};
