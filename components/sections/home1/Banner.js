

export default function Banner() {
    return (
        <>
            <section className="banner-area-two " data-background="/assets/img/banner/h2_banner_bg.jpg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="banner-content-two">
                                {/* <span className="sub-title" data-aos="fade-up" data-aos-delay={0}>Moderniza tu stack, reduce costos,</span> */}
                                <h1 className="title" data-aos="fade-up" data-aos-delay={300}>Transforma tu negocio hoy</h1>
                                <p data-aos="fade-up" data-aos-delay={500}>Descubre cómo nuestras soluciones pueden ayudarte a ser más competitivo, optimizar tus operaciones y aprovechar las oportunidades del futuro digital.</p>
                                <div className="banner-btn">
                                   
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="banner-img text-center">
                                <img src="/assets/perfil.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="banner-shape-wrap">
                <img src="/assets/img/banner/h2_banner_shape01.png" alt="" />
                <img src="/assets/img/banner/h2_banner_shape02.png" alt="" />
                <img src="/assets/img/images/h3_about_img02.jpg" alt="" />
                  <h1 className="machine">AI</h1>
                  <h1 className="web"> Web Design</h1>
                  <h1 className="ui"> Machine Learning</h1>
                  <h1 className="ai">UI/UX</h1>
                </div>
                
            </section>
        </>
    )
}
