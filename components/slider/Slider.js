import Link from "next/link";
import Slider from "react-slick";

const imagens = [
  '/assets/demoMovil.png',
  '/img/1.png',
  '/img/2.png',
  '/img/3.png',
  '/img/4.png',
  '/img/5.png',
  '/img/6.png',
  '/img/7.png',
  '/img/8.png',
  '/img/9.png',
  '/img/10.png',
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
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
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
