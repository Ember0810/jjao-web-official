import Link from "next/link"
export default function Contact2() {
    return (
        <>
            <section id="contact" className="contact-section bg_op_1" style={{ background: 'url(/assets/images/contact-bg-6.jpg)' }}>
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="medium-container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                            {/*===============spacing==============*/}
                            <div className="pd_top_30" />
                            {/*===============spacing==============*/}
                            <div className="title_all_box style_five  dark_color">
                                <div className="title_sections five left">
                                    <div className="before_title">The Steps of</div>
                                    <h2>讓信任與資源，成為你的企業 DNA</h2>
                                    <p>預約 30 分鐘診斷，找出能在 90 天內落地的成長方案</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className="contact_form_box_all type_two">
                                <div className="contact_form_box_inner">
                                    <img src="/assets/images/contact-man-1.png" alt="image" />
                                    <div className="contact_form_shortcode">
                                        <div className="heading">
                                            <h2>聯絡我們 <span>免費諮詢服務</span></h2>
                                        </div>
                                        <div className="_form">
                                            <div role="form" className="wpcf7" id="wpcf7-f2367-p2076-o1" lang="en-US" dir="ltr">
                                                <form action="#" method="post" className="wpcf7-form init" noValidate="novalidate" data-status="init">
                                                    <div className="row">
                                                        {/* <div className="col-lg-6">
                                                            <label> Your name<br />
                                                                <span className="wpcf7-form-control-wrap" data-name="your-name"><input type="text" name="your-name" size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Enter Your Name" /></span><br />
                                                                <i className="fa fa-user" /><br />
                                                            </label>
                                                        </div> */}
                                                        <div className="col-lg-12">
                                                            <label>電子信箱<br />
                                                                <span className="wpcf7-form-control-wrap" data-name="your-email"><input type="email" name="your-email" size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="" /></span><br />
                                                                <i className="fa fa-envelope" /><br />
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <label>電話號碼<br />
                                                                <span className="wpcf7-form-control-wrap" data-name="tel-922"><input type="tel" name="tel-922" size={40} className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel" aria-invalid="false" placeholder="" /></span><br />
                                                                <i className="fa fa-phone" /><br />
                                                            </label>
                                                        </div>
                                                        {/* <div className="col-lg-6">
                                                            <label> Subject<br />
                                                                <span className="wpcf7-form-control-wrap" data-name="your-subject"><input type="text" name="your-subject" size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Enter Your Subject" /></span><br />
                                                                <i className="fa fa-folder" /><br />
                                                            </label>
                                                        </div> */}
                                                        <div className="col-lg-12 text_area">
                                                            <label>簡單需求闡述<br />
                                                                <span className="wpcf7-form-control-wrap" data-name="your-message"><textarea name="your-message" cols={40} rows={10} className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="" defaultValue={""} /></span><br />
                                                                <i className="fa fa-comments" /><br />
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <input type="submit" defaultValue="Submit" className="wpcf7-form-control has-spinner wpcf7-submit" style={{ fontSize: "16px" }}/>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_bottom_90" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
