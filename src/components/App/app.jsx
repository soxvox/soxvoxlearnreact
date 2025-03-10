import { Layout } from "../Layout/layout";
import { restaurants } from "../../../materials/mock";
import { Restaurant } from "../Restaurant/restaurant";

export const App = ({ title }) => {
  return (
    <Layout title={title}>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </Layout>
  );
};
