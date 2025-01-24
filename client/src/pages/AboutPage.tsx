import { observer } from "mobx-react-lite";
import { Layout } from "../components/Layout";
import userStore from "../store/userStore";

export const AboutPage = observer(() => {
  return (
    <Layout>
      <h2>firstName:</h2>
      <h3>{userStore.firstName}</h3>
    </Layout>
  );
});
