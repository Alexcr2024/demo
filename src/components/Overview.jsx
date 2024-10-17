import { useTranslations } from "next-intl";

export default function Overview() {

  const t = useTranslations()

  return (
    <>
      <section className="overview-area pt-120 pb-120">
        <div
          className="overview-shape"
          data-aos="fade-left"
          data-aos-delay={200}
          data-background="/assets/img/images/overview_shape.png"
        />
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="overview-img-wrap">
                <img src="/img/images/overview_img01.jpg" alt="" />
                <img
                  src="/img/images/overview_img02.jpg"
                  alt=""
                  data-parallax='{"x" : 50 }'
                />
                <img src="/img/images/overview_img_shape.png" alt="" />
                <div className="icon">
                  <i className="flaticon-report-1" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="overview-content">
                <div className="section-title-two mb-20 tg-heading-subheading animation-style3">
                  <span className="sub-title"></span>
                  <h2 className="title tg-element-title">
                    {t("Global Impact")}
                  </h2>
                </div>
                <p className="info-one">
                  {t("With clients in various sectors and geographical locations, we have managed to impact companies around the world.")}
                </p>
                <p className="info-two">
                  {t("Our flexible and results-oriented approach has allowed us to become a strategic partner for companies looking to grow and evolve in the digital age.")}
                </p>
                <h4>
                    {t("Why Choose Vasco Technologies")}
                </h4>
                <ul>
                  <li style={{ marginBottom: "10px" }}>
                    <span>{t('Constant Innovation')}: </span>
                    {t("We incorporate the latest technologies to ensure that our solutions are always at the forefront.")}
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span>{t("Dedicated Support")}: </span>
                    {t("We provide comprehensive support that covers everything from implementation to maintenance of our solutions.")}
                  </li>
                  <li>
                    <span>{t("Scalability")}: </span>
                    {t("Our platforms are designed to grow with your business, facilitating its expansion into new markets.")}
                  </li>
                </ul>
                {/* <div className="content-bottom">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-trophy" />
                                            </div>
                                            <div className="content">
                                                <h2 className="count"><CounterUp count={235} />+</h2>
                                                <p>Best Award</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-rating" />
                                            </div>
                                            <div className="content">
                                                <h2 className="count"><CounterUp count={98} />k</h2>
                                                <p>Happy Clients</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
