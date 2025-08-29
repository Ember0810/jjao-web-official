import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ServiceClassic() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  const [activeIndex2, setActiveIndex2] = useState(1);
  const handleOnClick2 = (index) => {
    setActiveIndex2(index);
  };
  const swiperOptions = {
    // General
    direction: "horizontal",
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1350: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  };
  return (
    <>
      <section className="progress-section">
        {/*===============spacing==============*/}
        <div className="pd_top_90" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0 mb-xl-0">
              <div className="title_all_box style_one  dark_color">
                <div className="title_sections left">
                  <div className="before_title">服務內容</div>
                  <h2>企業培訓</h2>
                  <p>讓企業專注核心業務，同時擁有最佳解決方案</p>
                </div>
              </div>
              <div className="theme_btn_all color_one">
                <Link href="#" className="theme-btn four">
                  Read more <i className="icon-right-arrow" />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="progress_bar style_three">
                <h2>
                  溝通力 → 提升傳遞效率 <span>48%</span>
                </h2>
                <div className="bar">
                  <div
                    className="bar-inner count-bar counted"
                    data-percent="48%"
                    style={{ width: "48%" }}
                  />
                </div>
              </div>
              <div className="progress_bar style_three">
                <h2>
                  領導力 → 培養激勵與帶領團隊的能力<span>79%</span>
                </h2>
                <div className="bar">
                  <div
                    className="bar-inner count-bar counted"
                    data-percent="79%"
                    style={{ width: "79%" }}
                  />
                </div>
              </div>
              <div className="progress_bar style_three">
                <h2>
                  銷售力 → 強化成交能力<span>65%</span>
                </h2>
                <div className="bar">
                  <div
                    className="bar-inner count-bar counted"
                    data-percent="65%"
                    style={{ width: "65%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_50" />
        {/*===============spacing==============*/}
      </section>
    </>
  );
}
