// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Banner from "../../assets/Mask GroupFinal.png";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Banner} alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner} alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner} alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner} alt="Banner" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
