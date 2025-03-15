import { useReducer } from "react";
import { Counter } from "../Count/counter";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rate: 5,
};

const SET_NAME_ACTION = "SET_NAME_ACTION";
const SET_TEXT_ACTION = "SET_TEXT_ACTION";
const SET_RATE_ACTION = "SET_RATE_ACTION";
const SET_NEW_ACTION = "SET_NEW_ACTION";

const MAX_RATE = 5;
const MIN_RATE = 1;

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return { ...state, name: payload };
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
    case SET_RATE_ACTION:
      if (payload < MIN_RATE) {
        payload = MIN_RATE;
      }
      if (payload > MAX_RATE) {
        payload = MAX_RATE;
      }
      return { ...state, rate: payload };
    case SET_NEW_ACTION:
      return { ...DEFAULT_FORM_VALUE };
    default:
      return state;
  }
};

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

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
