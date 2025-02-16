import Slider from "react-slick";
import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

export default function MovieSection({ title, movies }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="movie-section">
      <h2 className="section-title">{title}</h2>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </Slider>
    </section>
  );
}

MovieSection.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.object,
};
