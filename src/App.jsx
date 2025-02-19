import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ErrorBoundary from "./components/ErrorCatch/ErrorBoundary";
import { MovieProvider } from "./context/movieContext";
import HomePage from "./pages/Home";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <Router>
      {/* <ErrorBoundary> */}
      <MovieProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
      </MovieProvider>
      {/* </ErrorBoundary> */}
    </Router>
  );
}

export default App;
