"use client";

import { ReviewsContainer } from "../Reviews/reviews-container";

export const ReviewPage = ({ restaurantId }) => {
  return <ReviewsContainer id={restaurantId} />;
};
