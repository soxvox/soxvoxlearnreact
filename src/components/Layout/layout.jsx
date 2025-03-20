import { ScrollProgressBar } from "../ScrollProgressBar/scroll-progress-bar";

export const Layout = ({ children, title }) => {
  return (
    <div>
      <header
        style={{
          position: "fixed",
          width: "100%",
          backgroundColor: "silver",
          top: "0",
          left: "0",
        }}
      >
        <h1>{title}</h1>
        <ScrollProgressBar />
      </header>
      <section style={{ paddingTop: "100px" }}>{children}</section>
      <footer>footer</footer>
    </div>
  );
};
