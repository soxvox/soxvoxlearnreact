import { Layout } from "../components/Layout/layout";
import { StoreProvider } from "../components/Store/store-provider";
import "./app.css";

export const metadata = {
  title: "Next restaurant",
  description: "restaurants app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <StoreProvider>
          <Layout title="Next restaurant list">
            <div id="root">{children}</div>
          </Layout>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
