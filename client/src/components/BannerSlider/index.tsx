import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Banner-slider.module.scss";

export interface Slide {
  img: string;
  link?: string;
}

interface BannerSliderProps {
  slides: Slide[];
}

export const BannerSlider = ({ slides }: BannerSliderProps) => {
  return (
    <div className={styles.banner}>
      <Swiper className={styles.banner__items} slidesPerView={1}>
        {slides.map((slide) => (
          <SwiperSlide className={styles.banner__slide}>
            <img src={slide.img} alt="" key={slide.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
