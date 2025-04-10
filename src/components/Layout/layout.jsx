"use client";

import { Header } from "../Header/header";
import { Cart } from "../Cart/cart";
import styles from "./layout.module.css";
import { ThemeContext } from "../ThemeContext/theme-context";
import { UserContext } from "../UserContext/user-context";

export const Layout = ({ children, title }) => {
  return (
    <ThemeContext>
      <UserContext>
        <Header title={title} />
        <section className={styles.content}>{children}</section>
        <Cart />
        <footer>footer</footer>
      </UserContext>
    </ThemeContext>
  );
};
