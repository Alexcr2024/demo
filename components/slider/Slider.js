import Link from "next/link";
import Slider from "react-slick";

const imagens = [
  // '/assets/demoMovil.png',
  '/img/1.png',
  '/img/2.png',
  '/img/3.png',
  '/img/4.png',
  '/img/5.png',
  '/img/6.png',
  '/img/7.png',
  '/img/8.png',
  '/img/9.png',
  '/img/11.png',
  '/img/12.png',
  '/img/13.png',
  '/img/14.png',
  '/img/15.png',
  '/img/16.png',
  '/img/17.png',
  '/img/18.png',
  '/img/19.png',
  '/img/20.png',
  '/img/21.png',
  '/img/22.png',
  '/img/23.png',
  '/img/24.png',
  '/img/25.png',
  '/img/26.png',
  '/img/27.png',
  '/img/28.png',
  '/img/29.png',
  '/img/30.png',
  '/img/31.png',
  '/img/32.png',
  '/img/33.png',
  '/img/34.png',
  '/img/35.png',
  '/img/36.png',
  '/img/37.png',
  '/img/38.png',
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
  autoplay: true,        // Habilita el pase automático
  autoplaySpeed: 2000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export default function MainSlider() {
  return (
    <>
      <Slider {...settings}>
        {imagens.map((item, index) => (
          <div
            key={index}
          >
            <img
              src={item}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </>
  );
}
