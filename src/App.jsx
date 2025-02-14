import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import MovieDetailsPage from "./pages/MovieDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
