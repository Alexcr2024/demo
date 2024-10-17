'use client'
import Link from "next/link";
import Slider from "react-slick";
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"
import { useState } from "react";
import { useTranslations } from "next-intl";



const imagens = [
  // '/assets/demoMovil.png',
  "/imge/1.png",
  "/imge/2.png",
  "/imge/3.png",
  "/imge/4.png",
  "/imge/5.png",
  "/imge/6.png",
  "/imge/7.png",
  "/imge/8.png",
  "/imge/9.png",
  "/imge/11.png",
  "/imge/12.png",
  "/imge/13.png",
  "/imge/14.png",
  "/imge/15.png",
  "/imge/16.png",
  "/imge/17.png",
  "/imge/18.png",
  "/imge/19.png",
  "/imge/20.png",
  "/imge/21.png",
  "/imge/22.png",
  "/imge/23.png",
  "/imge/24.png",
  "/imge/25.png",
  "/imge/26.png",
  "/imge/27.png",
  "/imge/28.png",
  "/imge/29.png",
  "/imge/30.png",
  "/imge/31.png",
  "/imge/32.png",
  "/imge/33.png",
  "/imge/34.png",
  "/imge/35.png",
  "/imge/36.png",
  "/imge/37.png",
  "/imge/38.png",
];

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "rgba(128, 128, 128, 0.5)",
        borderRadius: "50%",
        right: "10px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "rgba(128, 128, 128, 0.5)",
        borderRadius: "50%",
        left: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Habilita el pase automático
  autoplaySpeed: 2000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export default function MainSlider() {
  const [isOpen, setOpen] = useState(false)
  const t = useTranslations();

  return (
    <>
      <Slider {...settings}>
        {imagens.map((item, index) => (
          <div key={index}>
            <img src={item} alt="" />
          </div>
        ))}

    
      </Slider>

      
      <div className="d-flex justify-content-center">
      <button onClick={() => setOpen(true)} className="btn btn-primary demo-button">{t("Watch Demo")}</button>
      </div>

      <ModalVideo
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                ariaHideApp={false}
                channel="custom"
            >
                <video width="100%" height="500" autoPlay  controls onEnded={() => setOpen(false)}>
                    <source src="https://farmacdn.nyc3.cdn.digitaloceanspaces.com/APP_2.mp4" type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
            </ModalVideo>

    </>
  );
}
