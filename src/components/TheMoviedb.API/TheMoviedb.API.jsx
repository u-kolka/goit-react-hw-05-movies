import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = "90f6b8495fc32d384ced8ead78f4de37";

async function fetchTrendingMovies(page = 1) {
  const controller = new AbortController();
  const params = {
    api_key: `${API_KEY}`,
    page: page,
    language: 'en-US',
    signal: controller.signal,
  }; 
 
  try {
    const response = await axios.get(BASE_URL + '/trending/movie/day', { params }); 
    return response.data.results; 
  } catch {
    return Promise.reject(new Error(`No trending movie, please reload the site!`));
  }
};

async function fetchMoviesByQuery(query='', page = 1) {
  const controller = new AbortController();
  const params = {
    api_key: `${API_KEY}`,
    query: query,
    page: page,
    language: 'en-US',
    signal: controller.signal,
  }; 
 
  try {
    const response = await axios.get(BASE_URL + '/search/movie', { params });
    return response.data; 
  } catch {
    return Promise.reject(new Error(`No movies as requested: ${query}`));
  }
};

async function fetchMovieByID(id) {
  const controller = new AbortController();
  const params = {
    api_key: `${API_KEY}`,
    language: 'en-US',
    signal: controller.signal,
  }; 

  try {
    const response = await axios.get(BASE_URL + `/movie/${id}`, { params })
    return response.data; 
  } catch (error) {
    return Promise.reject(new Error(`No movies as requested: ${id}`));
  }
};

async function fetchMovieCredits(id) {
  const controller = new AbortController();
  const params = {
    api_key: `${API_KEY}`,
    language: 'en-US',
    signal: controller.signal,
  }; 

  try {
    const response = await axios.get(BASE_URL + `/movie/${id}/credits`, { params })
    return response.data; 
  } catch (error) {
    return Promise.reject(new Error(`No movies as requested: ${id}`));
  }
};

async function fetchMovieReviews(id) {
  const controller = new AbortController();
  const params = {
    api_key: `${API_KEY}`,
    language: 'en-US',
    signal: controller.signal,
  }; 

  try {
    const response = await axios.get(BASE_URL + `/movie/${id}/reviews`, { params })
    return response.data; 
  } catch (error) {
    return Promise.reject(new Error(`No movies as requested: ${id}`));
  }
};

const TheMoviedb = {
  fetchTrendingMovies,
  fetchMoviesByQuery,
  fetchMovieByID,
  fetchMovieCredits,
  fetchMovieReviews,
};

export default TheMoviedb;