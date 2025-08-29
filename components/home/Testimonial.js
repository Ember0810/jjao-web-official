
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Testimonial1() {
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.prev-single-one',
            prevEl: '.prev-single-one',
        },

        // Pagination
        pagination: {
            el: '.number-pagination',
            clickable: true,
            type: "fraction"
        }
    };
    return (
        <>
            <section className="testimonial bg_op_1" style={{ backgroundImage: 'url(/assets/images/testimonialbg.jpg)' }}>
                <div className="row align-items-center">
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 pd_zero">
                        <div className="image">
                            <img src="/assets/images/testi-image.jpg" className="object-fit-cover img-fluid height_560px" alt="image" />
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 pd_zero">
                        {/*===============spacing==============*/}
                        <div className="pd_top_70" />
                        {/*===============spacing==============*/}
                        <div className="testimonial_sec_wrapper pd_left_70">
                            <div className="title_all_box style_one light_color">
                                <div className="title_sections">
                                    <div className="before_title">
                                        佼點讓客戶享受尊榮服務
                                    </div>
                                    <h2>客戶回饋</h2>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                            <div className="testimonial_sec light_color style_one">
                                <div className="icon_quotes">
                                    <i className="icon-quote" />
                                </div>
                                <div className="swiper-container">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="testimonial_box">
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="authour_details  image_yes ">
                                                    <div className="image">
                                                        <img src="/assets/images/testi-3.png" alt="image" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>科技業 HR</h2>
                                                        <span>人力資源經理</span>
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    「從策略到落地的完整支持，團隊表現看得見。」
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box">
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star fill" />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="authour_details  image_yes ">
                                                    <div className="image">
                                                        <img src="/assets/images/testi-2.png" alt="image" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>新創 CEO</h2>
                                                        <span>新創公司首席執行官</span>
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    「提案結構被改寫後，投資人第一次就聽懂並點頭。」
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial_box">
                                                <div className="rating">
                                                    <ul>
                                                        <li><span className="fa fa-star fill" /><span className="fa fa-star fill" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /><span className="fa fa-star empty" /></li>
                                                    </ul>
                                                </div>
                                                <div className="authour_details  image_yes ">
                                                    <div className="image">
                                                        <img src="/assets/images/testi-1.png" alt="image" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>製造業副總</h2>
                                                        <span>製造業副總</span>
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    「佼點幫我們找到對的顧問與工具，少走了很多彎路。」
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="arrows">
                                        <div className="prev-single-one" />
                                        <div className="next-single-one" />
                                    </div>
                                    <div className="num_pagination">
                                        <div className="number-pagination">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="pd_bottom_70" />
                        {/*===============spacing==============*/}
                    </div>
                    {/*-empty column-*/}
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12">
                    </div>
                    {/*-empty column-*/}
                </div>
            </section>

        </>
    )
}
