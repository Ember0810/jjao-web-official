import VideoBox from "@/components/elements/VideoBox";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Head from "next/head";
import dynamic from "next/dynamic";

const CounterUp = dynamic(() => import("@/components/elements/CounterUp"), {
  ssr: false,
});

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
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
    centeredSlides: true,

    // Navigation
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
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
        {/*-about-*/}
        <section id="about" className="about-section">
          {/*===============spacing==============*/}
          <div className="pd_top_90" />
          {/*===============spacing==============*/}
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-12 ">
                <div className="about_content position-relative z_99">
                  <div className="title_all_box style_one text-left  dark_color">
                    <div className="title_sections">
                      <div className="before_title" style={{ fontSize: "28px" }}>關於我們</div>
                      <h2>致力於協助企業強化團隊能力、整合關鍵資源</h2>
                    </div>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_20" />
                  {/*===============spacing==============*/}
                  <div className="description_box">
                    <h3>
                      佼點專注於企業培訓與商務媒合，聚焦溝通力、領導力、銷售力與競爭力四大核心能力。
                    </h3>
                    <h3>
                      服務產業涵蓋金融、航空、科技、製造與零售，致力於協助企業強化團隊能力、整合關鍵資源，將商業潛力轉化為具體成果。
                    </h3>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_25" />
                  {/*===============spacing==============*/}
                  <div className="row gutter_15px">
                    <div className="col-lg-6 col-md-12">
                      <div className="icon_box_all  style_two">
                        <div className="icon_content  icon_imgs ">
                          <div className="icon">
                            <img
                              src="/assets/images/icon-img-n-1.png"
                              className="img-fluid svg_image"
                              alt="icon png"
                            />
                          </div>
                          <div className="txt_content">
                            <p className="font-bold text-[var(--primary-color-one)]">
                              <CounterUp count={500} time={1} />
                              <small>+</small>
                            </p>
                            <p>企劃與提案經驗</p>
                          </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_25" />
                        {/*===============spacing==============*/}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="icon_box_all  style_two">
                        <div className="icon_content  icon_imgs ">
                          <div className="icon">
                            <img
                              src="/assets/images/service-ico-2.png"
                              className="img-fluid svg_image"
                              alt="icon png"
                            />
                          </div>
                          <div className="txt_content">
                            <p className="font-bold text-[var(--primary-color-one)]">
                              <CounterUp count={350} time={1} />
                              <small>+</small>
                            </p>
                            <p>培訓與講座</p>
                          </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_25" />
                        {/*===============spacing==============*/}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="icon_box_all  style_two">
                        <div className="icon_content  icon_imgs ">
                          <div className="icon">
                            <img
                              src="/assets/images/service-ico-1.png"
                              className="img-fluid svg_image"
                              alt="icon png"
                            />
                          </div>
                          <div className="txt_content">
                            <p className="font-bold text-[var(--primary-color-one)]">
                              <CounterUp count={1300} time={1} />
                              <small>+</small>
                            </p>
                            <p>成交案例</p>
                          </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_25" />
                        {/*===============spacing==============*/}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="icon_box_all  style_two">
                        <div className="icon_content  icon_imgs ">
                          <div className="icon">
                            <img
                              src="/assets/images/icon-img-n-5.png"
                              className="img-fluid svg_image"
                              alt="icon png"
                            />
                          </div>
                          <div className="txt_content">
                            <p className="font-bold text-[var(--primary-color-one)]">
                              <CounterUp count={10} time={1} />
                              <small>+</small>
                            </p>
                            <p>年跨產業顧問經驗</p>
                          </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_25" />
                        {/*===============spacing==============*/}
                      </div>
                    </div>
                  </div>
                  <div className="theme_btn_all color_one">
                    <Link href="#contact" className="theme-btn five" style={{ fontSize: "16px" }}>
                      聯絡我們
                      <i className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12">
                <div className="image_boxes style_two">
                  <img
                    src="/assets/images/shape-1.png"
                    className="background_image"
                    alt="image"
                  />
                  <div className="image one">
                    <img
                      src="/assets/images/about/about-6.png"
                      className="img-fluid"
                      alt="image"
                    />
                  </div>
                  <div className="image two">
                    <img
                      src="/assets/images/about/about-7.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="video_box">
                      <VideoBox />
                    </div>
                  </div>
                  <div className="authour_quotes">
                    <i className="icon-quote" />
                    <h6>Making What’s Possible in Human Resource</h6>
                    <p>/ Liam Oliver</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_70" />
          {/*===============spacing==============*/}
        </section>
        {/*-about end-*/}
    </>
  );
}
