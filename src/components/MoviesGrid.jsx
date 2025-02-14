// src/components/MoviesGrid/MoviesGrid.jsx
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import Slider from "react-slick";

export default function MoviesGrid({ title, movies }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="movies-section">
      <h2 className="section-title">{title}</h2>
      <div className="movies-grid">
        <Slider {...sliderSettings}>
          {movies.map((movie) => (
            <div key={movie.id} className="slide-item">
              <MovieCard movie={movie} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

MoviesGrid.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
    })
  ).isRequired,
};
