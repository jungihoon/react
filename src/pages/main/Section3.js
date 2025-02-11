import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "../../css/Section3.css";

function Section3() {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <div className="Businesses">
      <h3>Core Businesses</h3>
      <span>전국을 잇는 철도</span>
      <p>코레일은 철도 운송을 중심으로 다양한 사업을 통해 대한민국의 교통 혁신을 선도하고 있습니다. </p>
      <div className="sec3-swiper-wrap">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={"auto"}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          loopedSlides={2}
          navigation={{ clickable: true }}>
          <SwiperSlide>
            <div className="slide-item">
              <div className="text">1</div>
              <img src={require("../../images/train1.jpg")} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-item">
              <div className="text">2</div>
              <img src={require("../../images/train1.jpg")} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-item">
              <div className="text">3</div>
              <img src={require("../../images/train1.jpg")} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-item">
              <div className="text">4</div>
              <img src={require("../../images/train1.jpg")} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-item">
              <div className="text">5</div>
              <img src={require("../../images/train1.jpg")} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Section3;
