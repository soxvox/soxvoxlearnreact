import { Layout } from "../Layout/layout";
import { RestaurantList } from "../Tabs/restaurant-list";
import "./app.css";
import { ThemeContext } from "../ThemeContext/theme-context";
import { UserContext } from "../UserContext/user-context";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

export const App = ({ title }) => {
  return (
    <Provider store={store}>
      <ThemeContext>
        <UserContext>
          <Layout title={title}>
            <RestaurantList />
          </Layout>
        </UserContext>
      </ThemeContext>
    </Provider>
  );
};
