import { useCount } from "./use-count";

export const Counter = ({ min = 0, max = 5, defaultValue = 0 }) => {
  const { count, increment, decrement } = useCount(defaultValue);

  return (
    <div>
      <button onClick={decrement} disabled={count < min + 1}>
        -
      </button>
      {count}
      <button onClick={increment} disabled={count > max - 1}>
        +
      </button>
    </div>
  );
};
