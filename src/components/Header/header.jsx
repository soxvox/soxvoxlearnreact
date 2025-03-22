import { ScrollProgressBar } from "../ScrollProgressBar/scroll-progress-bar";
import styles from "./header.module.css";
import { ToggleTheme } from "../ToggleTheme/toggle-theme";
import classNames from "classnames";
import { ThemeContext } from "../ThemeContext";
import { use } from "react";
import { UserAuth } from "../UserAuth/user-auth";

export const Header = ({ title }) => {
  const { theme } = use(ThemeContext);

  return (
    <header
      className={classNames(styles.header, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      <h1>
        {title}
        <ToggleTheme />
        <UserAuth />
      </h1>
      <ScrollProgressBar />
    </header>
  );
};
