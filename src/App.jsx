import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorCatch/ErrorBoundary";
import MovieProvider from "./context/movieContext";
import HomePage from "./pages/Home";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`) // Replace with your actual API key
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log("API Test:", data))
      .catch((error) => console.error("API Test Error:", error));
  }, []);

  return (
    <Router>
      <ErrorBoundary>
        <MovieProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie-details/:id" element={<MovieDetailsPage />} />
          </Routes>
        </MovieProvider>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
