// src/services/api.js
import axios from "axios";
import { API_URLS, API_KEY } from "../constant";

export const fetchMovies = async (type, page = 1) => {
  try {
    const { data } = await axios.get(API_URLS[type], {
      params: { api_key: API_KEY, page },
    });
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const searchMovies = async (query, page = 1) => {
  try {
    const { data } = await axios.get(API_URLS.SEARCH, {
      params: { api_key: API_KEY, query, page },
    });
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const { data } = await axios.get(API_URLS.MOVIE_DETAILS(id), {
      params: {
        api_key: API_KEY,
        append_to_response: "credits,similar_movies",
      },
    });
    return data;
  } catch (error) {
    throw error.response.data;
  }
};
