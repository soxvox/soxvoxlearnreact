import { ScrollProgressBar } from "../ScrollProgressBar/scroll-progress-bar";
import styles from "./layout.module.css";
import { ToggleTheme } from "../ToggleTheme/toggle-theme";

export const Layout = ({ children, title }) => {
  return (
    <div>
      <header className={styles.header}>
        <h1>
          {title}
          <ToggleTheme />
        </h1>
        <ScrollProgressBar />
      </header>
      <section className={styles.content}>{children}</section>
      <footer>footer</footer>
    </div>
  );
};
