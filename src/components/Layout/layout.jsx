import { Header } from "../Header/header";
import styles from "./layout.module.css";

export const Layout = ({ children, title }) => {
  return (
    <div>
      <Header title={title} />
      <section className={styles.content}>{children}</section>
      <footer>footer</footer>
    </div>
  );
};
