import { useState, useEffect, use } from "react";
import styles from "./scroll-progress-bar.module.css";
import classNames from "classnames";
import { ThemeContext } from "../ThemeContext";

const getPosition = () => {
  return parseInt(
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
      100
  );
};

export const ScrollProgressBar = () => {
  const { theme } = use(ThemeContext);
  const [scrollPositionPercent, setScrollPositionPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollPositionPercent(getPosition());
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div
      className={classNames(styles.default, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
      style={{
        width: `${scrollPositionPercent}%`,
      }}
    />
  );
};
