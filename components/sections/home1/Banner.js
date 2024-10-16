import { useTranslation } from "react-i18next";

export default function Banner() {

    const { t } = useTranslation();

    return (
        <>
            <section className="banner-area-two " data-background="/assets/img/banner/h2_banner_bg.jpg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="banner-content-two">
                                {/* <span className="sub-title" data-aos="fade-up" data-aos-delay={0}>Moderniza tu stack, reduce costos,</span> */}
                                <h1 className="title" data-aos="fade-up" data-aos-delay={300}>
                                    {t("Leverage your business today")}
                                </h1>
                                <p data-aos="fade-up" data-aos-delay={500}>
                                    {t("Discover how our solutions can help you be more competitive, optimize your operations and take advantage of the opportunities of the digital future.")}
                                </p>
                                <div className="banner-btn">
                                   
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="banner-img relative ">
                                <img src="/assets/img/banner/h2_banner_shape01.png" alt="" />
                                <img src="/assets/img/banner/h2_banner_shape02.png" alt="" />
                                <img src="/assets/perfil.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                                <img src="/assets/img/images/h3_about_img02.jpg" alt="" />
                                <h1 className="machine">AI</h1>
                                <h1 className="web"> Web Design</h1>
                                <h1 className="ui"> Machine Learning</h1>
                                <h1 className="ai">UI/UX</h1>
                            </div>

                            
                        </div>
                    </div>
                </div>
                {/* <div className="banner-shape-wrap">
                <img src="/assets/img/banner/h2_banner_shape01.png" alt="" />
                <img src="/assets/img/banner/h2_banner_shape02.png" alt="" />
                <img src="/assets/img/images/h3_about_img02.jpg" alt="" />
                  <h1 className="machine">AI</h1>
                  <h1 className="web"> Web Design</h1>
                  <h1 className="ui"> Machine Learning</h1>
                  <h1 className="ai">UI/UX</h1>
                </div> */}
                
            </section>
        </>
    )
}
