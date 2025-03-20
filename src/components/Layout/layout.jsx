import { ScrollProgressBar } from "../ScrollProgressBar/scroll-progress-bar";
import styles from "./layout.module.css";

export const Layout = ({ children, title }) => {
  return (
    <div>
      <header className={styles.header}>
        <h1>{title}</h1>
        <ScrollProgressBar />
      </header>
      <section className={styles.content}>{children}</section>
      <footer>footer</footer>
    </div>
  );
};
