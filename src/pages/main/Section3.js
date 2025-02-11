import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "../../css/Section3.css";

function Section3() {
  return (
    <div className="Businesses">
      <h3>Core Businesses</h3>
      <span>전국을 잇는 철도</span>
      <p>코레일은 철도 운송을 중심으로 다양한 사업을 통해 대한민국의 교통 혁신을 선도하고 있습니다. </p>
      <Swiper modules={[Navigation, Pagination]} spaceBetween={50} slidesPerView={1} navigation={{ clickable: true }}>
        <SwiperSlide>
          <div className="swiper_wrap">
            <img src={require("../../images/train1.jpg")} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_wrap">
            <img src={require("../../images/train1.jpg")} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_wrap">
            <img src={require("../../images/train1.jpg")} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Section3;
