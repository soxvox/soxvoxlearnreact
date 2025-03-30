import { Header } from "../Header/header";
import { Cart } from "../Cart/cart";
import styles from "./layout.module.css";

export const Layout = ({ children, title }) => {
  return (
    <div>
      <Header title={title} />
      <section className={styles.content}>{children}</section>
      <Cart />
      <footer>footer</footer>
    </div>
  );
};
