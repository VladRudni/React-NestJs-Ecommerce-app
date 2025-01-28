import { Layout } from "../../components/Layout";

interface IAuthPage {
  typePage: "login" | "register";
}

export const AuthPage = ({ typePage }: IAuthPage) => {
  return (
    <Layout>
      <h1>Auth Page</h1>
      <h2>page type: {typePage}</h2>
    </Layout>
  );
};
