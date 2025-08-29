import Link from "next/link";
import VideoBox from "@/components/elements/VideoBox";

export default function About5() {
  return (
    <>
      <section className="about-section">
        {/*===============spacing==============*/}
        <div className="pd_bottom_80" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
              <div className="image_boxes style_six">
                <div className="image_box">
                  <img
                    src="/assets/images/about/about-3.jpg"
                    className="img-fluid height_510px object-fit-cover"
                    alt="about"
                  />
                  <div className="video_inner type_six">
                    <VideoBox />
                    <p>Play Video</p>
                  </div>
                  <div className="experience">
                    <div className="experience_inner">
                      <h2> 1300+ 成功媒合案例 </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-10 col-md-12">
              <div className="title_all_box style_five dark_color">
                <div className="title_sections five">
                  <div className="before_title">Intelligent</div>
                  <h2>為何選擇佼點?</h2>
                  <div className="description_box">
                    <p>
                      業務開發與資源媒合：1,300+
                      成交案例，擅長新創拓展與市場鏈結企劃與提案專業：500+
                      專案經驗，跨國/政府/募資顧問實績執行與專案管理：350+
                      講座課程經驗，嚴謹流程，成果驗收
                    </p>
                  </div>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="pd_bottom_20" />
              {/*===============spacing==============*/}
              <div className="row gutter_15px">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="icon_box_all style_six">
                    <div className="icon_content">
                      <div className="icon">
                        <span className="icon-line-chart" />
                      </div>
                      <div className="text_box">
                        <h2>
                          <Link href="#"> 500+ 專案經驗 </Link>
                        </h2>
                        <p>
                          擅長新創拓展與市場鏈結企劃與提案專業
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="icon_box_all style_six">
                    <div className="icon_content">
                      <div className="icon">
                        <span className="icon-bow-and-arrow" />
                      </div>
                      <div className="text_box">
                        <h2>
                          <Link href="#"> 350+ 講座課程經驗 </Link>
                        </h2>
                        <p>
                          跨國/政府/募資顧問實績執行與專案管理，嚴謹流程，成果驗收
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="pd_bottom_30" />
              {/*===============spacing==============*/}
              <div className="row gutter_15px">
                <div className="col-lg-5 col-md-5 col-sm-12">
                  <div className="theme_btn_all color_one">
                    <Link href="#" className="theme-btn five">
                      Learn More
                      <i className="icon-right-arrow" />
                    </Link>
                  </div>
                  {/*===============spacing==============*/}
                  <div className="pd_bottom_40" />
                  {/*===============spacing==============*/}
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12">
                  <div className="extra_content image_with_content dark_color">
                    <div className="simple_image">
                      <img src="/assets/images/authour-image.png" alt="img" />
                      <h2>
                        {" "}
                        Since 1998, Operating <br /> in Birmingham.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_40" />
          {/*===============spacing==============*/}
          <div className="row">
            <div className="col-xl-6 col-lg-6 mb-5 mb-lg-0 mb-xl-0">
              <div className="link_box_contents style_one">
                <div className="link_content_bx">
                  <div className="image_box">
                    <img src="/assets/images/link-box-2.png" alt="img" />
                  </div>
                  <div className="con_box">
                    <h2>
                      For More Information About Our Recruitment Services{" "}
                    </h2>
                    <Link href="#">
                      {" "}
                      More About Us <i className="icon-right-arrow-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="link_box_contents style_two">
                <div className="link_content_bx">
                  <div className="con_box">
                    <h2>Creote has experience across all industries.</h2>
                    <Link href="#">
                      Get Appointment <i className="icon-right-arrow-long" />
                    </Link>
                  </div>
                  <div className="image_box">
                    <img src="/assets/images/link-box-1.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_80" />
        {/*===============spacing==============*/}
      </section>
    </>
  );
}
