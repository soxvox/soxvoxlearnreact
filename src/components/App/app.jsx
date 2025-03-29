import { Layout } from "../Layout/layout";
import { RestaurantList } from "../Tabs/restaurant-list";
import "./app.css";
import { ThemeContext } from "../ThemeContext/theme-context";
import { UserContext } from "../UserContext/user-context";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { HomePage } from "../../pages/home-page";
import { RestaurantPage } from "../../pages/restaurant-page";
import { DishPage } from "../../pages/dish-page";
import { MenuPage } from "../../pages/menu-page";
import { ReviewPage } from "../../pages/review-page";

export const App = ({ title }) => {
  return (
    <Provider store={store}>
      <ThemeContext>
        <UserContext>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout title={title} />}>
                <Route index element={<HomePage />} />
                <Route path="/restaurants" element={<RestaurantList />}>
                  <Route path=":restaurantId" element={<RestaurantPage />}>
                    <Route index element={<Navigate to="menu" replace />} />
                    <Route path="menu" element={<MenuPage />} />
                    <Route path="review" element={<ReviewPage />} />
                  </Route>
                </Route>
                <Route path="/dish" element={<DishPage />}>
                  <Route path=":dishId" element={<DishPage />} />
                  <Route path="*" element={<div>not presented</div>} />
                </Route>
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </UserContext>
      </ThemeContext>
    </Provider>
  );
};
