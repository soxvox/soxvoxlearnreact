import { useReviewReducer } from "./use-review-reducer";
import { Counter } from "../Count/counter";
import styles from "./review-form.module.css";
import { use } from "react";
import { UserContext } from "../UserContext";
import { Button } from "../Button/button";
import { useAddReviewMutation } from "../../redux/services/api";

export const ReviewForm = ({ restaurantId }) => {
  const { form, setName, setText, setRate, clearForm } = useReviewReducer();
  const { name, text, rate } = form;
  const { user, userId } = use(UserContext);
  const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation();

  const handleSubmit = () => {
    addReview({
      restaurantId: restaurantId,
      review: { text, rating: rate, userId },
    });
    clearForm();
  };

  if (!user) {
    return null;
  }

  if (isAddReviewLoading) {
    return "you review is being sent";
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
        <Button onClick={handleSubmit} disabled={isAddReviewLoading}>
          Send
        </Button>
      </div>
    </div>
  );
};
