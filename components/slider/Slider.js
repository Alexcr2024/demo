import Link from "next/link";
import Slider from "react-slick";

const imagens = [
  "/img/img1.png",
  "/img/img1 (2).png",
  "/img/img1 (3).png",
  "/img/img1 (4).png",
  "/img/img1 (5).png",
  "/img/img1 (6).png",
  "/img/img1 (7).png",
  "/img/img1 (8).png",
  "/img/img1 (9).png",
  "/img/img1 (10).png",
  "/img/img1 (11).png",
  "/img/img1 (12).png",
  "/img/img1 (13).png",
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
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export default function MainSlider() {
  return (
    <>
      <Slider {...settings}>
        {imagens.map((item, index) => (
          <div key={index} style={{ padding: "10px" }}>
            <img src={item} alt="" style={{ width: "100%", borderRadius: "8px" }} /> 
          </div>
        ))}
      </Slider>
    </>
  );
}
