import { toast } from "react-toastify";
import { Layout } from "../../components/Layout";

import styles from "./404.module.scss";
import { useEffect } from "react";

export const NotFoundPage = () => {
  useEffect(() => {
    toast.error("page not found");
  });
  return (
    <Layout>
      <div className={styles.notFoundPage}>
        <h1>page not found</h1>
      </div>
    </Layout>
  );
};
