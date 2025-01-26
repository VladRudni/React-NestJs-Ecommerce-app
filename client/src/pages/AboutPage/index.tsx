import { Layout } from "../../components/Layout";
import userStore from "../../store/userStore";

export const AboutPage = () => {
  return (
    <Layout>
      <h2>firstName:</h2>
      <h3>{userStore.firstName}</h3>
    </Layout>
  );
};
