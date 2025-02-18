const apiKey = import.meta.env.VITE_API_KEY;

export const fetchMovies = async () => {
  try {
    if (!apiKey) {
      throw new Error(
        "API Key is missing. Ensure VITE_API_KEY is set in your .env file and your dev server has been restarted."
      );
    }

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // Re-throw the error to be handled by the component
  }
};

export const searchMovies = async (query) => {
  try {
    if (!apiKey) {
      throw new Error(
        "API Key is missing. Ensure VITE_API_KEY is set in your .env file and your dev server has been restarted."
      );
    }
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Search Movies Fetch error:", error);
    throw error;
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    if (!apiKey) {
      throw new Error(
        "API Key is missing. Ensure VITE_API_KEY is set in your .env file and your dev server has been restarted."
      );
    }
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Movie Details Fetch error:", error);
    throw error;
  }
};

export const fetchCredits = async (id) => {
  try {
    if (!apiKey) {
      throw new Error(
        "API Key is missing. Ensure VITE_API_KEY is set in your .env file and your dev server has been restarted."
      );
    }
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Fetch Credits Fetch error:", error);
    throw error;
  }
};

export const fetchSimilarMovies = async (id) => {
  try {
    if (!apiKey) {
      throw new Error(
        "API Key is missing. Ensure VITE_API_KEY is set in your .env file and your dev server has been restarted."
      );
    }
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Similar Movies Fetch error:", error);
    throw error;
  }
};
