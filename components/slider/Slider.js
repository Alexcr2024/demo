import Link from "next/link";
import Slider from "react-slick";

const imagens = [
  '/assets/demoMovil.png',
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
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '240px',
              width: '100%',
              maxWidth: '100%', 
            }}
          >
            <img
              src={item}
              alt=""
              style={{
                maxHeight: '240px',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Slider>
    </>
  );
}
