import { Header } from "../Header/header";
import { Cart } from "../Cart/cart";
import styles from "./layout.module.css";
import { Outlet } from "react-router";

export const Layout = ({ title }) => {
  return (
    <div>
      <Header title={title} />
      <section className={styles.content}>
        <Outlet />
      </section>
      <Cart />
      <footer>footer</footer>
    </div>
  );
};
