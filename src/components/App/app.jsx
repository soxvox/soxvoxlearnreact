import { Layout } from "../Layout/layout";
import { restaurants } from "../../../materials/mock";
import { RestaurantList } from "../Tabs/restaurant-list";
import "./app.css";
import { ThemeContext } from "../ThemeContext/theme-context";

export const App = ({ title }) => {
  return (
    <ThemeContext>
      <Layout title={title}>
        <RestaurantList restaurants={restaurants} />
      </Layout>
    </ThemeContext>
  );
};
