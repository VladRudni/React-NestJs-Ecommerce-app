import { useEffect } from "react";
import { Layout } from "../../components/Layout";
import categoryStore from "../../store/categoryStore";
import { CategoriesList } from "./CategoriesList";
import { observer } from "mobx-react-lite";

import styles from "./Main-page.module.scss";
import { BannerSlider, Slide } from "../../components/BannerSlider";
import BannerImage from "../../assets/banner.png";
import { CCol, CRow } from "@coreui/bootstrap-react";

export const MainPage = observer(() => {
  const slides: Slide[] = [
    { img: BannerImage },
    { img: BannerImage },
    { img: BannerImage },
  ];

  useEffect(() => {
    categoryStore.getAllCategories();
  });
  return (
    <Layout>
      <section className={styles.hero}>
        <CRow>
          <CCol xs={3} className={styles.hero__categories}>
            <CategoriesList categories={categoryStore.categories} />
          </CCol>
          <CCol xs={9} className={styles.hero__slider}>
            <BannerSlider slides={slides} />
          </CCol>
        </CRow>
      </section>
    </Layout>
  );
});
