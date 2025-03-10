import { Layout } from "../Layout/layout";
import { restaurants } from "../../../materials/mock";
import { Tabs } from "../Tabs/tabs";

export const App = ({ title }) => {
  return (
    <Layout title={title}>
      <Tabs restaurants={restaurants} />
    </Layout>
  );
};
