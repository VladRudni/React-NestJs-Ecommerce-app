import { useEffect } from "react";
import { Layout } from "../../components/Layout";
import categoryStore from "../../store/categoryStore";
import { CategoriesList } from "./CategoriesList";
import { observer } from "mobx-react-lite";

import styles from "./Main-page.module.scss";
import { BannerSlider, Slide } from "../../components/BannerSlider";

import BannerImage from "../../assets/banner.png";

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
        <div className={styles.hero__categories}>
          <CategoriesList categories={categoryStore.categories} />
        </div>
        <div className={styles.hero__slider}>
          <BannerSlider slides={slides} />
        </div>
      </section>
    </Layout>
  );
});
