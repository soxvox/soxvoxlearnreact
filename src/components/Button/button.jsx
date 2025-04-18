import classNames from "classnames";
import styles from "./button.module.css";
import { use } from "react";
import { ThemeContext } from "../ThemeContext";

export const Button = ({
  children,
  disabled,
  onClick,
  colorViewVariant = "default",
  sizeViewVariant = "none",
  className,
}) => {
  const { theme } = use(ThemeContext);

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(styles.root, className, {
        [styles.default]: colorViewVariant === "default",
        [styles.active]: colorViewVariant === "active",
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
        [styles.padding5]: sizeViewVariant === "padding5",
      })}
    >
      {children}
    </button>
  );
};
