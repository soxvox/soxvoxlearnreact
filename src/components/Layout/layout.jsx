export const Layout = ({ children, title }) => {
  return (
    <div>
      <header style={{ position: "fixed" }}>
        <h1>{title}</h1>
      </header>
      <section style={{ paddingTop: "100px" }}>{children}</section>
      <footer>footer</footer>
    </div>
  );
};
