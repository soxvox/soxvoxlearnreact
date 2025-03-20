import { useReviewReducer } from "./use-review-reducer";
import { Counter } from "../Count/counter";

export const ReviewForm = () => {
  const { form, setName, setText, setRate, setNew } = useReviewReducer();

  const { name, text, rate } = form;

  return (
    <div style={{ paddingTop: "300px" }}>
      <div>Добавить отзыв</div>
      <div>
        <span>Name</span>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <span>Text</span>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <span>Rate</span>
        <Counter
          count={rate}
          increment={() => setRate(rate + 1)}
          decrement={() => setRate(rate - 1)}
        />
      </div>
      <div>
        <button onClick={() => setNew()}>Clear</button>
      </div>
    </div>
  );
};
