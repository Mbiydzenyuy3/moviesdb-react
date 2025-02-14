// src/pages/HomePage.js
import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../services/api-services";
// import MoviesGrid from "../components/MoviesGrid";
// import BrandSlider from "../components/Brandslider";
import Footer from "../components/footer";
import Header from "../components/header";
import HeroCard from "../components/HeroCard";

export default function HomePage() {
  // const dispatch = useDispatch();
  // const { popular, topRated, nowPlaying } = useSelector(
  //   (state) => state.movies
  // );

  useEffect(() => {
    fetchMovies("POPULAR");
    fetchMovies("TOP_RATED");
    fetchMovies("NOW_PLAYING");
  }, []);

  return (
    <>
      <Header />
      <div className="home-page">
        <HeroCard/>
        {/* <BrandSlider /> */}

        {/* <MoviesGrid title="Popular Movies" movies={popular} />
        <MoviesGrid title="Top Rated Movies" movies={topRated} />
        <MoviesGrid title="Now Playing" movies={nowPlaying} /> */}
      </div>
      <Footer />
    </>
  );
}
