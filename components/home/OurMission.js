export default function ElementTeam() {
  return (
    <>
      <div className="auto-container">
        <div className="row default_row">
          <div className="full_width_box">
            {/*===============spacing==============*/}
            <div className="pd_top_80" />
            {/*===============spacing==============*/}
            <div className="team_intro_box">
              <div className="team_intro_inner">
                <div className="image_bg">
                  <img
                    src="../assets/images/cal-to-action-2.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="team_intro_start">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="left_content">
                        <div className="title">
                          <h6>品牌使命</h6>
                          <h1 className="text-4xl font-bold">
                            打造能贏得信任與資源的企業體質
                          </h1>
                        </div>
                        <div className="quotes">
                          <span className="icon-quote" />
                          <h5>
                            我們致力成為企業成長的策略夥伴，協助打造能驅動成長、擴展機會、吸引資源的體質，並透過最適切的支持與解決方案，讓企業專注於核心業務並持續前進。
                          </h5>
                        </div>
                        <div className="authour_dtls">
                          <img
                            src="../assets/images/signature.png"
                            className="sign"
                            alt="image"
                          />
                          <h4>Crafting DNA for Trust and Resources.</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4"></div>
                  </div>
                </div>
              </div>
              <div className="image_right">
                <img src="../assets/images/man.png" alt="image" />
              </div>
            </div>
            {/*===============spacing==============*/}
            <div className="pd_bottom_80" />
            {/*===============spacing==============*/}
          </div>
        </div>
      </div>
    </>
  );
}
