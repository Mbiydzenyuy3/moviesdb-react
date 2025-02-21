const apiKey = import.meta.env.VITE_API_KEY;

export const fetchMovies = async (query) => {
  try {
    console.log("Starting fetch for:", query);

    const response = await fetch(apiKey);

    console.log("Response status:", response.status);
    const data = await response.json();
    console.log("API Response:", data);

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
  );
  console.log(response);
  return response.json();
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  );
  console.log(response);
  return response.json();
};

export const fetchCredits = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
  );
  console.log(response);
  return response.json();
};

export const fetchSimilarMovies = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}`
  );
  console.log(response);
  return response.json();
};
