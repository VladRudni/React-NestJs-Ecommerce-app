import { FC, ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Regular-slider.module.scss";
import "swiper/css";

interface RegularSlider {
  slides: ReactElement[];
}

export const RegularSlider: FC<RegularSlider> = ({ slides }) => {
  return (
    <Swiper className={styles.slider__regular}>
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};
