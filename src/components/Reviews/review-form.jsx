import { useReviewReducer } from "./use-review-reducer";
import { Counter } from "../Count/counter";
import styles from "./review-form.module.css";
import { use } from "react";
import { UserContext } from "../UserContext";

export const ReviewForm = () => {
  const { form, setName, setText, setRate, clearForm } = useReviewReducer();

  const { name, text, rate } = form;

  const { user } = use(UserContext);
  if (!user) {
    return null;
  }

  return (
    <div className={styles.form}>
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
        <button onClick={clearForm}>Clear</button>
      </div>
    </div>
  );
};
