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
      <div className="Businesses_txt">
        <span>전국을 잇는 철도</span>
        <p>코레일은 철도 운송을 중심으로 다양한 사업을 통해 대한민국의 교통 혁신을 선도하고 있습니다. </p>
      </div>
      <div className="sec3-swiper-wrap">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={"auto"}
          spaceBetween={30}
          loop={true}
          loopedSlides={2}
          navigation={{ clickable: true }}>
          <SwiperSlide>
            <div className="slide-item">
              <div className="text">
                여객수송
                <span>
                  한국철도공사 여객사업본부는, 전국을 반나절 생활권으로 <br />
                  이어주는 고속열차와 지역과 지역을 연결하는 일반열차를
                  <br />
                  통해 안전하고 편리한 여객 서비스를 제공합니다.
                </span>
              </div>
              <img src={require("../../images/train1.jpg")} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-item">
              <div className="text">
                ㅋㅋ
                <span>
                  ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ <br />
                  ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
                </span>
              </div>
              <img src={require("../../images/train1.jpg")} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-item">
              <div className="text">
                ㅋㅋㅋ
                <span>
                  ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ <br />
                  ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
                </span>
              </div>
              <img src={require("../../images/train1.jpg")} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-item">
              <div className="text">
                ㅋㅋㅋㅋ
                <span>
                  ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ <br />
                  ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
                </span>
              </div>
              <img src={require("../../images/train1.jpg")} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Section3;
