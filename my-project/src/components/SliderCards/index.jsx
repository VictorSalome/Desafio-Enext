// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import CardInfo from "../Card";

export default function SliderCard() {
  return (
    <>
      <div className="ml-96 mt-12 px-20 ">
        <Swiper
          navigation={true}
          slidesPerView={4}
          spaceBetween={1}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="ml-16">
            <CardInfo />
          </SwiperSlide>
          <SwiperSlide>
            <CardInfo />
          </SwiperSlide>
          <SwiperSlide>
            <CardInfo />
          </SwiperSlide>
          <SwiperSlide>
            <CardInfo />
          </SwiperSlide>
          <SwiperSlide>
            <CardInfo />
          </SwiperSlide>
          <SwiperSlide>
            <CardInfo />
          </SwiperSlide>
          <SwiperSlide>
            <CardInfo />
          </SwiperSlide>
          <SwiperSlide>
            <CardInfo />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
