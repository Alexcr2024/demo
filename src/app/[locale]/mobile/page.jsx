'use client'
import VideoPopup from "@/components/PopupVideo";
import MainSlider from "@/components/Slider";
import { useTranslations } from "next-intl";


export default function Choose() {

    const t = useTranslations();

    return (
        <>
            
            <section className="choose-area jarallax choose-bg" data-background="/assets/img/bg/choose_bg.jpg">
            
                <div className="choose-shape">
                    <img src="/assets/img/images/choose_shape.png" alt="" data-aos="fade-right" data-aos-delay={0} />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <div className="section-title-two white-title mb-20 tg-heading-subheading animation-style3">
                                    <h4 className="title tg-element-title">
                                        {t("Meet our app demo")}
                                    </h4>
                                </div>
                                  <p>
                                      {t("Explore")}
                                  </p>
                                <VideoPopup style={1} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="skill-wrap wow fadeInRight" data-wow-delay=".2s">
                              <MainSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             
        
        </>
    )
}