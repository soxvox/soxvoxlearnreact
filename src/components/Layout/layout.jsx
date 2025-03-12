export const Layout = ({ children, title }) => {
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      <section>{children}</section>
      <footer>footer</footer>
    </div>
  );
};
