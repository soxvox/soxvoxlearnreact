import { Layout } from "../Layout/layout";
import { restaurants } from "../../../materials/mock";
import { RestaurantList } from "../Tabs/restaurant-list";
import "./app.css";
import { ThemeContext } from "../ThemeContext/theme-context";
import { UserContext } from "../UserContext/user-context";

export const App = ({ title }) => {
  return (
    <ThemeContext>
      <UserContext>
        <Layout title={title}>
          <RestaurantList restaurants={restaurants} />
        </Layout>
      </UserContext>
    </ThemeContext>
  );
};
