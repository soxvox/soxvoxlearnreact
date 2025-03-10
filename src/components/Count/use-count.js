import { useState } from "react";

export const useCount = (defaultValue) => {
  const [count, setCount] = useState(defaultValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return {
    count,
    increment,
    decrement,
  };
};
