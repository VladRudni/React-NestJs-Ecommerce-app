import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Banner-slider.module.scss";

export interface BannerSlide {
  img: string;
  link?: string;
}

interface BannerSliderProps {
  slides: BannerSlide[];
}

export const BannerSlider = ({ slides }: BannerSliderProps) => {
  return (
    <Swiper
      className={styles.banner}
      slidesPerView={1}
      loop={true}
      pagination={{
        enabled: true,
        bulletClass: styles.bullet,
        clickable: true,
        bulletActiveClass: styles.bullet__active,
        horizontalClass: styles.swiper__pagination,
      }}
      modules={[Pagination]}
    >
      {slides.map((slide, i) => (
        <SwiperSlide className={styles.banner__slide} key={slide.img + i}>
          <img src={slide.img} alt={`Banner slide ${i}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
