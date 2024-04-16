import { v4 } from 'uuid';

import { sliderData } from '../data/sliderData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const MainSlider = () => {
  return (
    <section className="">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper">
        {sliderData.map((slide) => (
          <SwiperSlide key={v4()} className="">
            <img src={slide.img} alt="slide" className="h-[800px]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MainSlider;
