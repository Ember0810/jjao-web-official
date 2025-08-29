import Link from "next/link";
export default function Service() {
  return (
    <>
      <section className="service-section">
        <div className="title-sec bg_dark_3 pd_top_100">
          <div className="container">
            <div className="row gutter_30px">
              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="title_all_box style_one light_color">
                  <div className="title_sections left">
                    <div className="before_title">服務內容 (Our Services)</div>
                    <h2>企業培訓 Training</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_190" />
          {/*===============spacing==============*/}
        </div>
        <div className="service-box-wrapper  pd_bottom_60 bg_light_1">
          <div className="container">
            <div className="row gutter_30px">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <div className="service_box style_five dark_color mr_top_minus_160">
                  <div className="service_content">
                    <div className="image_box">
                      <img
                        src="/assets/images/service/service-image-1.png"
                        className="img-fluid"
                        alt="Service Image"
                      />
                    </div>
                    <div className="content_inner">
                      <span className=" icon-human-resources" />
                      <div className="text_box">
                        <h2 className="text-2xl font-bold">溝通力</h2>
                        <p>
                          簡報與說服結構、跨部門協作 → 提升傳遞效率，降低摩擦
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_30" />
                {/*===============spacing==============*/}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <div className="service_box style_five dark_color mr_top_minus_160 mr_md_top_zero">
                  <div className="service_content">
                    <div className="image_box">
                      <img
                        src="/assets/images/service/service-image-3.png"
                        className="img-fluid"
                        alt="Service Image"
                      />
                    </div>
                    <div className="content_inner">
                      <span className=" icon-audit" />
                      <div className="text_box">
                        <h2>
                          <Link href="#">領導力</Link>
                        </h2>
                        <p>主管職能、團隊共識 → 培養激勵與帶領團隊的能力</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_30" />
                {/*===============spacing==============*/}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <div className="service_box style_five dark_color mr_top_minus_160 mr_md_top_zero">
                  <div className="service_content">
                    <div className="image_box">
                      <img
                        src="/assets/images/service/service-image-5.jpg"
                        className="img-fluid"
                        alt="Service Image"
                      />
                    </div>
                    <div className="content_inner">
                      <span className=" icon-heartbeat" />
                      <div className="text_box">
                        <h2>
                          <Link href="#">銷售力</Link>
                        </h2>
                        <p>
                          提案技巧、成交策略、客戶經營 → 強化成交能力，創造營收
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_30" />
                {/*===============spacing==============*/}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <div className="service_box style_five dark_color mr_top_minus_160 mr_md_top_zero">
                  <div className="service_content">
                    <div className="image_box">
                      <img
                        src="/assets/images/service/service-image-5.jpg"
                        className="img-fluid"
                        alt="Service Image"
                      />
                    </div>
                    <div className="content_inner">
                      <span className=" icon-heartbeat" />
                      <div className="text_box">
                        <h2>
                          <Link href="#">商務媒合</Link>
                        </h2>
                        <p>
                          不只是培訓公司，而是企業的解決方案代理商
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_30" />
                {/*===============spacing==============*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
