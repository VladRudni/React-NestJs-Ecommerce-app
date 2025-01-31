import { useEffect } from "react";
import { Layout } from "../../components/Layout";
import categoryStore from "../../store/categoryStore";
import { CategoriesList } from "./CategoriesList";
import { observer } from "mobx-react-lite";

import styles from "./Main-page.module.scss";
import {
  BannerSlider,
  BannerSlide,
} from "../../components/sliders/BannerSlider";
import BannerImage from "../../assets/banner.png";
import { CCol, CRow } from "@coreui/bootstrap-react";
import { SectionTitle } from "../../components/Typography/SectionTitle";
import { Title } from "../../components/Typography/Title";
import { Button } from "../../components/ui/Button";
import { Link } from "react-router";
import { routes } from "../../config/routes";

export const MainPage = observer(() => {
  const slides: BannerSlide[] = [
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
          <CCol md={3} className={styles.hero__categories}>
            <CategoriesList categories={categoryStore.categories} />
          </CCol>
          <CCol md={9} className={styles.hero__slider}>
            <BannerSlider slides={slides} />
          </CCol>
        </CRow>
        <SectionTitle>Today’s</SectionTitle>
        <CRow>
          <CCol md={10}>
            <Title>Best Selling Products</Title>
          </CCol>
          <CCol md={2}>
            <Button position="center">View All</Button>
          </CCol>
        </CRow>
      </section>
    </Layout>
  );
});
