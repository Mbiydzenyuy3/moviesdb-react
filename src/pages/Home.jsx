import { useEffect } from "react";
import { useMovieContext } from "../context/movieContext";
import HeroSection from "../components/HeroCard";
// import BrandSlider from "../components/BrandSlider";
import MovieSection from "../components/MoviesSection";
import Footer from "../components/footer";
import Header from "../components/header";

export default function HomePage() {
  const { fetchMovies, movies } = useMovieContext();

  useEffect(() => {
    fetchMovies("popular");
    fetchMovies("top_rated");
    fetchMovies("now_playing");
  }, [fetchMovies]);

  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      {/* <BrandSlider /> */}
      <MovieSection title="Popular Movies" movies={movies.popular} />
      <MovieSection title="Top Rated Movies" movies={movies.top_rated} />
      <MovieSection title="Now Playing" movies={movies.now_playing} />
      <Footer />
    </div>
  );
}
