import { useReviewReducer } from "./use-review-reducer";
import { Counter } from "../Count/counter";

const SET_NAME_ACTION = "SET_NAME_ACTION";
const SET_TEXT_ACTION = "SET_TEXT_ACTION";
const SET_RATE_ACTION = "SET_RATE_ACTION";
const SET_NEW_ACTION = "SET_NEW_ACTION";

export const ReviewForm = () => {
  const { form, dispatch } = useReviewReducer();

  const { name, text, rate } = form;
  const setName = (name) => dispatch({ type: SET_NAME_ACTION, payload: name });
  const setText = (text) => dispatch({ type: SET_TEXT_ACTION, payload: text });
  const setRate = (rate) => dispatch({ type: SET_RATE_ACTION, payload: rate });
  const setNew = () => dispatch({ type: SET_NEW_ACTION, payload: null });

  return (
    <div>
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
