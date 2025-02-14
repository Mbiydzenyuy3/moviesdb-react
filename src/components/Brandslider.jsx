// src/components/BrandSlider/BrandSlider.jsx
import Slider from "react-slick";
import PropTypes from "prop-types";
import { BRAND_LOGOS } from "../constant";


export default function BrandSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="brand-slider">
      <Slider {...settings}>
        {BRAND_LOGOS.map((brand, index) => (
          <div key={index} className="brand-slide">
            <img
              src={`/assets/img/${brand}.png`}
              alt={`${brand} logo`}
              className="brand-logo"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

BrandSlider.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.string),
};
