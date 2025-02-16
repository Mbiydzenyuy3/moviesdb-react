import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import MovieDetailsPage from "./pages/MovieDetails";
import MovieProvider from "./context/movieContext";

export default function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}
